import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysl5nf33v.css';
import '../../css/v/vjs9accli.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysl5nf33v"/><path class="vjs9accli"/>`,
		"fallback": "garden:edit-undo-fill-16",
	});
}

export default Component;
