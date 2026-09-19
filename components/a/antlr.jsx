import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/d/dzw6b4ble.css';
import '../../css/h/h7ek_kb8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="dzw6b4ble"/><path class="h7ek_kb8m"/></g>`,
		"fallback": "catppuccin:antlr",
	});
}

export default Component;
