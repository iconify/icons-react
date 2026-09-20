import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok6vmhxfl.css';
import '../../css/y/yon6iwelm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ok6vmhxfl"/><path class="yon6iwelm"/></g>`,
		"fallback": "streamline-ultimate:envelope-sealed",
	});
}

export default Component;
