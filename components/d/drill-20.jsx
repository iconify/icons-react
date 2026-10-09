import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn57uwkqp.css';
import '../../css/i/iken03bqc.css';
import '../../css/d/dxh4m4evm.css';
import '../../css/i/ii8fx2bom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn57uwkqp"/><path class="iken03bqc"/><path class="dxh4m4evm"/><path class="ii8fx2bom"/>`,
		"fallback": "energy-icons:drill-20",
	});
}

export default Component;
