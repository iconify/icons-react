import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnlu7groz.css';
import '../../css/c/ctkssrb4p.css';
import '../../css/c/c0ra1xmbv.css';
import '../../css/p/pji95kflm.css';
import '../../css/c/cpu21_gkk.css';
import '../../css/y/ye7lwuhvg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mnlu7groz"/><path class="ctkssrb4p"/><path class="c0ra1xmbv"/><path class="pji95kflm"/><path class="cpu21_gkk"/><path class="ye7lwuhvg"/></g>`,
		"fallback": "streamline-kameleon-color:education-globe-pop",
	});
}

export default Component;
