import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mduaavbtc.css';
import '../../css/q/qspsxcilt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mduaavbtc"/><path class="qspsxcilt"/></g>`,
		"fallback": "hugeicons:database-sync",
	});
}

export default Component;
