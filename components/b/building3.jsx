import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uicrbeb8l.css';
import '../../css/u/uf1-fbdbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uicrbeb8l"/><path class="uf1-fbdbb"/></g>`,
		"fallback": "reicon:building3",
	});
}

export default Component;
