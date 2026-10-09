import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coivkzecr.css';
import '../../css/f/fengbsb3f.css';
import '../../css/n/n1tbb-ujx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coivkzecr"/><path class="fengbsb3f"/><path class="n1tbb-ujx"/>`,
		"fallback": "energy-icons:house-plug-20-bold",
	});
}

export default Component;
