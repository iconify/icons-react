import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l-t8ute4j.css';
import '../../css/m/m_-vx9hbm.css';
import '../../css/h/hx6mz-bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l-t8ute4j"/><path class="m_-vx9hbm"/><path class="hx6mz-bsi"/></g>`,
		"fallback": "hugeicons:computer-desk-02",
	});
}

export default Component;
