import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9pn9_rbs.css';
import '../../css/w/wnmug3wbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9pn9_rbs"/><path class="wnmug3wbz"/></g>`,
		"fallback": "streamline-ultimate:following-1",
	});
}

export default Component;
