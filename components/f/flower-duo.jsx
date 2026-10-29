import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slmd9ybfi.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/z/zyla41bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="slmd9ybfi"/><path class="hbi8hhkfx wm-a"/><path class="zyla41bsz"/></g>`,
		"fallback": "withicons:flower-duo",
	});
}

export default Component;
