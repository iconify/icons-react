import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_dnedc0a.css';
import '../../css/z/zrzqsnbdu.css';
import '../../css/m/m0bfmobtd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_dnedc0a"/><path class="zrzqsnbdu"/><path class="m0bfmobtd"/></g>`,
		"fallback": "glyphs-poly:clock-fast",
	});
}

export default Component;
