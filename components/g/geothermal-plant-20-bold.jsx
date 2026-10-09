import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8grm_bir.css';
import '../../css/m/mh0v8zovj.css';
import '../../css/j/jsxzfjb0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8grm_bir"/><path class="mh0v8zovj"/><path class="jsxzfjb0b"/>`,
		"fallback": "energy-icons:geothermal-plant-20-bold",
	});
}

export default Component;
