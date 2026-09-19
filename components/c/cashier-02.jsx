import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mywrjeb3t.css';
import '../../css/e/eij92sb7e.css';
import '../../css/g/g5wlpfz4d.css';
import '../../css/g/gznmo1rha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mywrjeb3t"/><path class="eij92sb7e"/><path class="g5wlpfz4d"/><path class="gznmo1rha"/></g>`,
		"fallback": "hugeicons:cashier-02",
	});
}

export default Component;
