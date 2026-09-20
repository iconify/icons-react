import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wau1_4buh.css';
import '../../css/p/pmz69hbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wau1_4buh"/><path class="pmz69hbci"/></g>`,
		"fallback": "mynaui:cloud-upload",
	});
}

export default Component;
