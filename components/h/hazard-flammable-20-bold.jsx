import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/h/hzc3zu61t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="hzc3zu61t"/>`,
		"fallback": "energy-icons:hazard-flammable-20-bold",
	});
}

export default Component;
