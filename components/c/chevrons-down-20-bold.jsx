import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-p4p_9x.css';
import '../../css/u/uavtgqbwb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj-p4p_9x"/><path class="uavtgqbwb"/>`,
		"fallback": "energy-icons:chevrons-down-20-bold",
	});
}

export default Component;
