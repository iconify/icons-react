import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4l2r92ma.css';
import '../../css/j/jnj0g8b4e.css';
import '../../css/e/e9_m8lzcu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="x4l2r92ma"/><path class="jnj0g8b4e"/><path class="e9_m8lzcu"/></g>`,
		"fallback": "marketeq:information-square",
	});
}

export default Component;
