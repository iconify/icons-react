import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydzbdhtcp.css';
import '../../css/e/e5c90cc_n.css';
import '../../css/m/md21q1b6t.css';

const viewBox = {"width":333.22,"height":333.22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydzbdhtcp"/><path class="e5c90cc_n"/><path class="md21q1b6t"/>`,
		"fallback": "thesvg-color:dominos-dark",
	});
}

export default Component;
