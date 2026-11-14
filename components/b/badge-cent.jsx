import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vw8ljybdn.css';
import '../../css/q/qvlsibbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vw8ljybdn"/><path class="qvlsibbjq"/></g>`,
		"fallback": "hugeicons:badge-cent",
	});
}

export default Component;
