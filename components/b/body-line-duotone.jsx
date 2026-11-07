import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ul_cyrb5l.css';
import '../../css/b/bfqkenb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ul_cyrb5l"/><path class="bfqkenb0l"/></g>`,
		"fallback": "solar:body-line-duotone",
	});
}

export default Component;
