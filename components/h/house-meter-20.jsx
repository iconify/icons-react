import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7juawdew.css';
import '../../css/d/d2axpfabm.css';
import '../../css/m/mmo1ocbhg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7juawdew"/><path class="d2axpfabm"/><path class="mmo1ocbhg"/>`,
		"fallback": "energy-icons:house-meter-20",
	});
}

export default Component;
