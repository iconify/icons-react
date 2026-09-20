import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hyyy7-loz.css';
import '../../css/q/q40tv3wii.css';
import '../../css/w/wn7ercind.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hyyy7-loz"/><path class="q40tv3wii"/><path class="wn7ercind"/></g>`,
		"fallback": "marketeq:gallery",
	});
}

export default Component;
