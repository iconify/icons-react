import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/t170-qrdh.css';
import '../../css/w/wiwbm0b8q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="t170-qrdh"/><path class="wiwbm0b8q"/>`,
		"fallback": "energy-icons:cable-drum-20",
	});
}

export default Component;
