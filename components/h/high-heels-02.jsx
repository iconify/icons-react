import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ivlmmabox.css';
import '../../css/v/vkzli6vno.css';
import '../../css/t/txydjqbax.css';
import '../../css/z/z_9nnjbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ivlmmabox"/><path class="vkzli6vno"/><path class="txydjqbax"/><path class="z_9nnjbki"/></g>`,
		"fallback": "hugeicons:high-heels-02",
	});
}

export default Component;
