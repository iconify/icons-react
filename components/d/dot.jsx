import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_svioi-r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_svioi-r"/>`,
		"fallback": "picon:dot",
	});
}

export default Component;
