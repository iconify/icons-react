import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ct9lq-phd.css';
import '../../css/n/npzbi206w.css';
import '../../css/l/lqkmkym5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ct9lq-phd"/><circle class="npzbi206w"/><path class="lqkmkym5x"/></g>`,
		"fallback": "hugeicons:chess-bishop",
	});
}

export default Component;
