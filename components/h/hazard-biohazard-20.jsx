import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_s1zkbf.css';
import '../../css/t/th83uglwj.css';
import '../../css/t/t2zfzobxi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_s1zkbf"/><path class="th83uglwj"/><path class="t2zfzobxi"/>`,
		"fallback": "energy-icons:hazard-biohazard-20",
	});
}

export default Component;
