import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih_a-vb3d.css';
import '../../css/t/tf0qaik3p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih_a-vb3d"/><path class="tf0qaik3p"/>`,
		"fallback": "energy-icons:cpu-20-bold",
	});
}

export default Component;
