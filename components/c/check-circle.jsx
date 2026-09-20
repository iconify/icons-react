import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr73dcb6v.css';
import '../../css/s/seygw-57p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wr73dcb6v"/><path class="seygw-57p"/></g>`,
		"fallback": "mage:check-circle",
	});
}

export default Component;
