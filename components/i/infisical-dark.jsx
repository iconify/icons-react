import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adofu2bem.css';
import '../../css/q/q_f2verot.css';
import '../../css/u/uzmog6blg.css';

const viewBox = {"width":91,"height":43};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGu9x5JcyK)" class="adofu2bem"/><defs><linearGradient id="SVGu9x5JcyK" x1="46" x2="66" y1="0" y2="80.5" gradientUnits="userSpaceOnUse"><stop class="q_f2verot"/><stop offset="1" class="uzmog6blg"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:infisical-dark",
	});
}

export default Component;
