import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvj6mb8y.css';
import '../../css/m/mz-9qgswv.css';
import '../../css/v/vao3mhbsj.css';
import '../../css/g/g87xp5bho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvj6mb8y"/><path class="mz-9qgswv"/><path class="vao3mhbsj"/><path class="g87xp5bho"/>`,
		"fallback": "energy-icons:cable-car-48-bold",
	});
}

export default Component;
