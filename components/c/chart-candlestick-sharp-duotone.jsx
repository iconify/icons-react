import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/e/esjml2b0p.css';
import '../../css/a/al81-g13g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="esjml2b0p"/><path class="al81-g13g"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-sharp-duotone",
	});
}

export default Component;
