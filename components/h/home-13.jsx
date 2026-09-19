import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nhg65vm-y.css';
import '../../css/g/gd88_0z7r.css';
import '../../css/u/uwh40hb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nhg65vm-y"/><path class="gd88_0z7r"/><path class="uwh40hb4g"/></g>`,
		"fallback": "hugeicons:home-13",
	});
}

export default Component;
