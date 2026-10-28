import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pfrrg4wdq.css';
import '../../css/m/m0u-h5bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pfrrg4wdq"/><path class="m0u-h5bsu"/></g>`,
		"fallback": "andrsrxn:brackets-ellipsis",
	});
}

export default Component;
