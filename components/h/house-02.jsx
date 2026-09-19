import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hl471tb-q.css';
import '../../css/h/hf3pd9fjs.css';
import '../../css/d/digy0rbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hl471tb-q"/><path class="hf3pd9fjs"/><path class="digy0rbjh"/></g>`,
		"fallback": "hugeicons:house-02",
	});
}

export default Component;
