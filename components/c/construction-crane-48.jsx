import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx8d4-q2n.css';
import '../../css/f/fjtwhsb_o.css';
import '../../css/p/pxpj-8byp.css';
import '../../css/u/u8yg584ct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx8d4-q2n"/><path class="fjtwhsb_o"/><path class="pxpj-8byp"/><path class="u8yg584ct"/>`,
		"fallback": "energy-icons:construction-crane-48",
	});
}

export default Component;
