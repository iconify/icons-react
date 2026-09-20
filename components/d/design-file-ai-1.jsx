import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hi4m-fb_p.css';
import '../../css/y/yf1n3v_ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hi4m-fb_p"/><path class="yf1n3v_ff"/></g>`,
		"fallback": "streamline-ultimate:design-file-ai-1",
	});
}

export default Component;
