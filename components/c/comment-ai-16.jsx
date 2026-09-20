import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj20fccvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj20fccvq"/>`,
		"fallback": "octicon:comment-ai-16",
	});
}

export default Component;
