import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxoda9rgs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxoda9rgs"/>`,
		"fallback": "codicon:comment-draft",
	});
}

export default Component;
