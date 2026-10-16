import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d25p8sb0p.css';
import '../../css/j/j1ynsb0aw.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d25p8sb0p"/><path class="j1ynsb0aw"/><path class="z0v5_fbef"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:geothermal-plant-check-20-bold",
	});
}

export default Component;
