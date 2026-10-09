import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g21_8vbpp.css';
import '../../css/v/v-zb6dbml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g21_8vbpp"/><path class="v-zb6dbml"/>`,
		"fallback": "energy-icons:e-fuel-48-bold",
	});
}

export default Component;
