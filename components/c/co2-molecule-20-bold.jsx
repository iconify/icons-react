import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-pu_abiq.css';
import '../../css/m/m2fwg6b2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-pu_abiq"/><path class="m2fwg6b2k"/>`,
		"fallback": "energy-icons:co2-molecule-20-bold",
	});
}

export default Component;
