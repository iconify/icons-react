import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx60lf81p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx60lf81p"/>`,
		"fallback": "catppuccin:folder-roblox-open",
	});
}

export default Component;
