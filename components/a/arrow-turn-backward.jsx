import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m6g7--bll.css';
import '../../css/x/xgygxmptz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m6g7--bll"/><path class="xgygxmptz"/></g>`,
		"fallback": "hugeicons:arrow-turn-backward",
	});
}

export default Component;
