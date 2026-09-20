import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3vs7td1h.css';
import '../../css/o/o2a1_1bbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3vs7td1h"/><path class="o2a1_1bbp"/>`,
		"fallback": "vaadin:bomb",
	});
}

export default Component;
