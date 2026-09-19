import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tnvy_fbgp.css';
import '../../css/y/yrumspm5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tnvy_fbgp"/><path class="yrumspm5z"/></g>`,
		"fallback": "hugeicons:ai-phone-02",
	});
}

export default Component;
