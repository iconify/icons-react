import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l562sp3ng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l562sp3ng"/>`,
		"fallback": "codicon:comment-discussion-quote",
	});
}

export default Component;
