import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_fkomb0s.css';
import '../../css/u/uk8ks_p6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a_fkomb0s"/><path class="uk8ks_p6o"/></g>`,
		"fallback": "solar:colour-tuneing-line-duotone",
	});
}

export default Component;
