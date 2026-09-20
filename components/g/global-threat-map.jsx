import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7e6y5p4s.css';
import '../../css/v/viua5ob8y.css';
import '../../css/u/ujmnkboja.css';
import '../../css/s/s0jsk3l4d.css';
import '../../css/y/y6jly4b4c.css';
import '../../css/q/qy9u29tdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGOvl45tah" x1="0" x2="512" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="u7e6y5p4s"/><stop offset="1" class="viua5ob8y"/></linearGradient><path fill="url(#SVGOvl45tah)" class="ujmnkboja"/><path class="s0jsk3l4d"/><circle class="y6jly4b4c"/><circle class="qy9u29tdq"/>`,
		"fallback": "selfhst:global-threat-map",
	});
}

export default Component;
