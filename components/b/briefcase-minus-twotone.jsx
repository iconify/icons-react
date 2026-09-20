import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7uv-j.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/l/li54_l.css';
import '../../css/y/y4wbml.css';
import '../../css/v/vhensb.css';
import '../../css/b/botfzx.css';
import '../../css/n/nzt8lq.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-64.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIaLWZcDh"><path class="d7uv-j t5pxry zxndow"/><path class="li54_l t5pxry y4wbml zxndow"/><path class="vhensb"/></mask></defs><path mask="url(#SVGIaLWZcDh)" class="botfzx"/><path class="nzt8lq t5pxry y4wbml"/>`,
		"fallback": "line-md:briefcase-minus-twotone",
	});
}

export default Component;
