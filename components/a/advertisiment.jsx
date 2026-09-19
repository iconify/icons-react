import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tv4petbfj.css';
import '../../css/h/h51v-acsf.css';
import '../../css/y/ycfia5bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tv4petbfj"/><path class="h51v-acsf"/><path class="ycfia5bpk"/></g>`,
		"fallback": "hugeicons:advertisiment",
	});
}

export default Component;
