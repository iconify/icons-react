import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52hq6b9u.css';
import '../../css/z/z9kgvgb1l.css';
import '../../css/w/wfiv04kcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h52hq6b9u"/><path class="z9kgvgb1l"/><path class="wfiv04kcm"/>`,
		"fallback": "solar:camera-off-outline",
	});
}

export default Component;
