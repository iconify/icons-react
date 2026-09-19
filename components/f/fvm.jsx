import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rynp_kb5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rynp_kb5m"/>`,
		"fallback": "catppuccin:fvm",
	});
}

export default Component;
