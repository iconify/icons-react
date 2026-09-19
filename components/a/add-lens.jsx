import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqnud0ptr.css';
import '../../css/k/kj1ww7d1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sqnud0ptr"/><path class="kj1ww7d1p"/></g>`,
		"fallback": "iconoir:add-lens",
	});
}

export default Component;
