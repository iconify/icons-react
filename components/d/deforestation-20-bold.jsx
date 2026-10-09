import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhuk8-b5y.css';
import '../../css/u/u8bmg4bmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhuk8-b5y"/><path class="u8bmg4bmi"/>`,
		"fallback": "energy-icons:deforestation-20-bold",
	});
}

export default Component;
