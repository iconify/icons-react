import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypzf8b8r.css';
import '../../css/f/f-_fxyb8e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yypzf8b8r"/><path class="f-_fxyb8e"/>`,
		"fallback": "catppuccin:folder-windows-open",
	});
}

export default Component;
