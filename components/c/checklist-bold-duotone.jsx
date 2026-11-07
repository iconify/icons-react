import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbm6yshqe.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/h_oi-tcog.css';
import '../../css/z/zsdc5-17y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbm6yshqe"/><g class="xtpeb-edw"><path class="h_oi-tcog"/><path class="zsdc5-17y"/></g>`,
		"fallback": "solar:checklist-bold-duotone",
	});
}

export default Component;
