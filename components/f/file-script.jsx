import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nke9_abay.css';
import '../../css/g/g8zu5voca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nke9_abay"/><path class="g8zu5voca"/></g>`,
		"fallback": "hugeicons:file-script",
	});
}

export default Component;
