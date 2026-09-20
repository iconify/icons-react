import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qowkc_bfp.css';
import '../../css/m/mad_geb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qowkc_bfp"/><path class="mad_geb1c"/></g>`,
		"fallback": "solar:double-alt-arrow-up-line-duotone",
	});
}

export default Component;
