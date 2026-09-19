import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax7zwolhm.css';
import '../../css/a/ant9fwtwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax7zwolhm"/><path class="ant9fwtwn"/>`,
		"fallback": "eos-icons:big-data-outlined",
	});
}

export default Component;
