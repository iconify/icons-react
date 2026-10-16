import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zro89qjwt.css';
import '../../css/v/vwrn1bbgu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zro89qjwt"/><path class="vwrn1bbgu"/>`,
		"fallback": "energy-icons:charger-solar-48-bold",
	});
}

export default Component;
