import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ko22q1b9a.css';
import '../../css/o/or9ywybpp.css';
import '../../css/h/hp_bkssfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ko22q1b9a"/><path class="or9ywybpp"/><path class="hp_bkssfr"/></g>`,
		"fallback": "evicons:idle-fee",
	});
}

export default Component;
