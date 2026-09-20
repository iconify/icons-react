import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o053b3bvz.css';
import '../../css/c/c06oizb4q.css';
import '../../css/m/m665vacsm.css';
import '../../css/k/km0xgebky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o053b3bvz"/><path class="c06oizb4q"/><path class="m665vacsm"/><path class="km0xgebky"/>`,
		"fallback": "vaadin:calendar-clock",
	});
}

export default Component;
