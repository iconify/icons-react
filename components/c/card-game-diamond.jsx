import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rs5edjbjh.css';
import '../../css/k/ka0jv7b7u.css';
import '../../css/e/ej1x9gz2h.css';
import '../../css/y/yfh0lebon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rs5edjbjh"/><path class="ka0jv7b7u"/><path class="ej1x9gz2h"/><path class="yfh0lebon"/></g>`,
		"fallback": "streamline-sharp-color:card-game-diamond",
	});
}

export default Component;
