import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzhyhrb7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzhyhrb7m"/>`,
		"fallback": "catppuccin:eleventy",
	});
}

export default Component;
