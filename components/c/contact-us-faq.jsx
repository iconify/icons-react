import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/so7ut0p3d.css';
import '../../css/j/j09j7cc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="so7ut0p3d"/><path class="j09j7cc8m"/></g>`,
		"fallback": "streamline-ultimate:contact-us-faq",
	});
}

export default Component;
