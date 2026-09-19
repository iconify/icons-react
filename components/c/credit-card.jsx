import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/os38r8_ao.css';
import '../../css/f/f_roqrbwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="os38r8_ao"/><path class="f_roqrbwn"/></g>`,
		"fallback": "charm:credit-card",
	});
}

export default Component;
