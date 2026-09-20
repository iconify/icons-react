import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iee-akbkn.css';
import '../../css/o/o10soq-vv.css';
import '../../css/m/mi28tkziw.css';
import '../../css/l/l56cuebno.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iee-akbkn"/><path class="o10soq-vv"/><path class="mi28tkziw"/><path class="l56cuebno"/>`,
		"fallback": "medical-icon:i-genetics",
	});
}

export default Component;
