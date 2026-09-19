import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w20fv-jhn.css';
import '../../css/u/uc98yubsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w20fv-jhn"/><path class="uc98yubsj"/></g>`,
		"fallback": "hugeicons:hat",
	});
}

export default Component;
