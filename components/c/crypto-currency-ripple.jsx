import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6p0h2rje.css';
import '../../css/w/w2ihpg0pg.css';
import '../../css/n/ny37ipbgx.css';
import '../../css/h/hia_zvqyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q6p0h2rje"/><path class="w2ihpg0pg"/><path class="ny37ipbgx"/><path class="hia_zvqyz"/></g>`,
		"fallback": "streamline-ultimate-color:crypto-currency-ripple",
	});
}

export default Component;
