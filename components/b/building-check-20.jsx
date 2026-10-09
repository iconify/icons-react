import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1kol59_x.css';
import '../../css/w/wk-mpkb0v.css';
import '../../css/g/g3z_62mfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1kol59_x"/><path class="wk-mpkb0v"/><path class="g3z_62mfz"/>`,
		"fallback": "energy-icons:building-check-20",
	});
}

export default Component;
