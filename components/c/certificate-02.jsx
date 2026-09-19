import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d0_ljdbhp.css';
import '../../css/f/f439rob6g.css';
import '../../css/r/rdk114kho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d0_ljdbhp"/><circle class="f439rob6g"/><path class="rdk114kho"/></g>`,
		"fallback": "hugeicons:certificate-02",
	});
}

export default Component;
