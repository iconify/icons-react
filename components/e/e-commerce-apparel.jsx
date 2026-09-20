import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/grgswpbsf.css';
import '../../css/z/z0y3qob1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="grgswpbsf"/><path class="z0y3qob1x"/></g>`,
		"fallback": "streamline-ultimate:e-commerce-apparel",
	});
}

export default Component;
