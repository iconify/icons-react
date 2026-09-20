import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1d08c85x.css';
import '../../css/v/vcro5da3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a1d08c85x"/><path class="vcro5da3g"/></g>`,
		"fallback": "solar:arrow-right-line-duotone",
	});
}

export default Component;
