import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/w/wxvl6gbzy.css';
import '../../css/a/agcxoubcv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="wxvl6gbzy"/><path class="agcxoubcv"/>`,
		"fallback": "energy-icons:contrast-20",
	});
}

export default Component;
