import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4zl9wnja.css';
import '../../css/l/lqngvhr0v.css';
import '../../css/r/rj1kqxlid.css';
import '../../css/h/hbr7rrboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4zl9wnja"/><path class="lqngvhr0v"/><path class="rj1kqxlid"/><path class="hbr7rrboq"/></g>`,
		"fallback": "tdesign:cloudy-night",
	});
}

export default Component;
