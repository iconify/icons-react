import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyw6smbbz.css';
import '../../css/g/gkizqbbre.css';
import '../../css/c/curwmw7ao.css';
import '../../css/e/ehbz3nb5y.css';
import '../../css/e/ev396l1eb.css';
import '../../css/k/kn6rv-yhs.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyw6smbbz"/><path class="gkizqbbre"/><path class="curwmw7ao"/><circle class="ehbz3nb5y"/><path class="ev396l1eb"/><path class="kn6rv-yhs"/></g>`,
		"fallback": "cif:gd",
	});
}

export default Component;
