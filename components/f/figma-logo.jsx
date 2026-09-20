import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uazkj_b2c.css';
import '../../css/t/te2i2kjzd.css';
import '../../css/r/ro-0xob8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="uazkj_b2c"/><path class="te2i2kjzd"/><path class="ro-0xob8k"/></g>`,
		"fallback": "streamline-logos:figma-logo",
	});
}

export default Component;
