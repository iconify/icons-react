import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qbbfvybck.css';
import '../../css/b/bgc9xcc4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qbbfvybck"/><path class="bgc9xcc4x"/></g>`,
		"fallback": "hugeicons:atm-02",
	});
}

export default Component;
