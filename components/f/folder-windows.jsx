import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ugng94a.css';
import '../../css/f/f-_fxyb8e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ugng94a"/><path class="f-_fxyb8e"/>`,
		"fallback": "catppuccin:folder-windows",
	});
}

export default Component;
