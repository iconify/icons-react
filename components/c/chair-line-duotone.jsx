import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecuz5vb5i.css';
import '../../css/o/owqj8es1d.css';
import '../../css/d/dfwq4abdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecuz5vb5i"/><path class="owqj8es1d"/><path class="dfwq4abdp"/></g>`,
		"fallback": "solar:chair-line-duotone",
	});
}

export default Component;
