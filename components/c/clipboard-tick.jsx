import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lnc4c1gzh.css';
import '../../css/z/zsivi9bzc.css';
import '../../css/d/d3-3v1nvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lnc4c1gzh"/><path class="zsivi9bzc"/><path class="d3-3v1nvx"/></g>`,
		"fallback": "reicon:clipboard-tick",
	});
}

export default Component;
