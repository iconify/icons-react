import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hclm8l7ra.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yhy4dvn5l.css';
import '../../css/y/yidc_llwe.css';
import '../../css/p/ps8qtyblt.css';
import '../../css/a/ankpjzb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hclm8l7ra secondary"/><g class="dt0cm9dhy primary"><path class="yhy4dvn5l"/><circle class="yidc_llwe"/><path class="ps8qtyblt"/><path class="ankpjzb4q"/></g>`,
		"fallback": "iconaut:contact-duo",
	});
}

export default Component;
