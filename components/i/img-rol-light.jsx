import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v_vhlcbpc.css';
import '../../css/r/r-y8-pbrh.css';
import '../../css/g/g1vfkqbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="v_vhlcbpc"/><path class="r-y8-pbrh"/><path class="g1vfkqbjk"/></g>`,
		"fallback": "lets-icons:img-rol-light",
	});
}

export default Component;
