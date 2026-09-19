import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhew-98pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhew-98pv"/>`,
		"fallback": "cbi:huawei-solar-inverter",
	});
}

export default Component;
