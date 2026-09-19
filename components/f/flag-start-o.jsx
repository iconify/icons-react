import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5rhr4i0j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5rhr4i0j"/>`,
		"fallback": "gis:flag-start-o",
	});
}

export default Component;
