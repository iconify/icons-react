import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e0dwy-v-a.css';
import '../../css/t/t618gnb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e0dwy-v-a"/><path class="t618gnb4j"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-left-sharp-duotone",
	});
}

export default Component;
