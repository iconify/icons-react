import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s1yet0cyf.css';
import '../../css/d/di-sq0b4x.css';
import '../../css/l/lylwz-bed.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s1yet0cyf"/><path class="di-sq0b4x"/><path class="lylwz-bed"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:colors-square2-filled",
	});
}

export default Component;
