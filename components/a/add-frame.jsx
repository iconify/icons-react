import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l_30rwwrj.css';
import '../../css/o/oti__ve6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l_30rwwrj"/><path class="oti__ve6x"/></g>`,
		"fallback": "iconoir:add-frame",
	});
}

export default Component;
