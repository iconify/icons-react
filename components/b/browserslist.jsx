import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz7dlcc-l.css';
import '../../css/a/ah8b_-xeq.css';
import '../../css/r/rqh9r0b_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tz7dlcc-l"><path class="ah8b_-xeq"/><path class="rqh9r0b_f"/></g>`,
		"fallback": "catppuccin:browserslist",
	});
}

export default Component;
