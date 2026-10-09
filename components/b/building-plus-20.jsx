import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1kol59_x.css';
import '../../css/w/wk-mpkb0v.css';
import '../../css/r/rmh-uhtym.css';
import '../../css/a/aqj0--bjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1kol59_x"/><path class="wk-mpkb0v"/><path class="rmh-uhtym"/><path class="aqj0--bjv"/>`,
		"fallback": "energy-icons:building-plus-20",
	});
}

export default Component;
