import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_p5btbjw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_p5btbjw"/>`,
		"fallback": "energy-icons:cloud-fog-20-bold",
	});
}

export default Component;
