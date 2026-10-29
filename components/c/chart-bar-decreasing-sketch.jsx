import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekfw6raai.css';
import '../../css/z/zuar5lbsy.css';
import '../../css/b/bhhd6db8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ekfw6raai wm-a"/><path class="wm-k zuar5lbsy"/><path class="bhhd6db8f wm-a"/></g>`,
		"fallback": "withicons:chart-bar-decreasing-sketch",
	});
}

export default Component;
