import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlpz3ljgc.css';
import '../../css/x/xp0bkxb5p.css';
import '../../css/b/bwm_8acuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlpz3ljgc"/><path class="xp0bkxb5p"/><path class="bwm_8acuc"/>`,
		"fallback": "energy-icons:flue-20-bold",
	});
}

export default Component;
