import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypa03g2ao.css';
import '../../css/c/c0-sywbwt.css';
import '../../css/v/v45g71edj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypa03g2ao"/><path class="c0-sywbwt"/><path class="v45g71edj"/>`,
		"fallback": "energy-icons:currency-exchange-48",
	});
}

export default Component;
