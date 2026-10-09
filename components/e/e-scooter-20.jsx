import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfezx0bem.css';
import '../../css/a/a1563zsfw.css';
import '../../css/s/s00ny_50k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfezx0bem"/><path class="a1563zsfw"/><path class="s00ny_50k"/>`,
		"fallback": "energy-icons:e-scooter-20",
	});
}

export default Component;
