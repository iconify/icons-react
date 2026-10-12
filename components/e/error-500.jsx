import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwuhwnv2s.css';
import '../../css/z/z9omoriwy.css';
import '../../css/v/vce2rf8kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="cwuhwnv2s"/><rect class="z9omoriwy"/><path class="vce2rf8kl"/></g>`,
		"fallback": "andrsrxn:error-500",
	});
}

export default Component;
