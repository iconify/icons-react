import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jty7kd72t.css';
import '../../css/m/mdahkqbzi.css';
import '../../css/f/ftv2nez3w.css';
import '../../css/l/lvc2twb-d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGdPAaMbgP" x1="64" x2="64" y1="2.16" y2="125.84" gradientUnits="userSpaceOnUse"><stop offset="0" class="jty7kd72t"/><stop offset="1" class="mdahkqbzi"/></linearGradient></defs><rect fill="url(#SVGdPAaMbgP)" class="ftv2nez3w"/><path class="lvc2twb-d"/>`,
		"fallback": "devicon:behance",
	});
}

export default Component;
