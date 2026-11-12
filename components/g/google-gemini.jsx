import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqbodib9s.css';
import '../../css/j/j-v9o_7nq.css';
import '../../css/l/lmyxwzfdh.css';
import '../../css/r/rptwl7fjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGcOLrjc8O" cx="-80.789" cy="2.985" r="32" gradientTransform="rotate(18.683 -57.47 4644.045)scale(17.03 136.42101)" gradientUnits="userSpaceOnUse"><stop offset=".067" class="eqbodib9s"/><stop offset=".343" class="j-v9o_7nq"/><stop offset=".672" class="lmyxwzfdh"/></radialGradient><path fill="url(#SVGcOLrjc8O)" class="rptwl7fjn"/>`,
		"fallback": "selfhst:google-gemini",
	});
}

export default Component;
