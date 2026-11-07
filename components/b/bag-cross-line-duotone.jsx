import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u04hmj8af.css';
import '../../css/s/shxcjzbfi.css';
import '../../css/m/mw42pob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u04hmj8af"/><path class="shxcjzbfi"/><path class="mw42pob4d"/></g>`,
		"fallback": "solar:bag-cross-line-duotone",
	});
}

export default Component;
