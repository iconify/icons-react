import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lovf6abha.css';
import '../../css/e/e_fu4pe8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lovf6abha"/><path class="e_fu4pe8q"/></g>`,
		"fallback": "hugeicons:fish-symbol",
	});
}

export default Component;
