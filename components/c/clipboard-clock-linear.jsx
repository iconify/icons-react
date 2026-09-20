import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lz14ttf8r.css';
import '../../css/m/m390b8qby.css';
import '../../css/x/xjmp9lmjf.css';
import '../../css/h/hnstdmbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lz14ttf8r"/><path class="m390b8qby"/><circle class="xjmp9lmjf"/><path class="hnstdmbhp"/></g>`,
		"fallback": "solar:clipboard-clock-linear",
	});
}

export default Component;
