import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ak0qmub_n.css';
import '../../css/y/ymx9su2zi.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ak0qmub_n"/><path class="ymx9su2zi"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:hierarchy-square2",
	});
}

export default Component;
