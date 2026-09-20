import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc86bf0gu.css';
import '../../css/h/htispzbmc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc86bf0gu"/><path class="htispzbmc"/>`,
		"fallback": "vaadin:angle-double-down",
	});
}

export default Component;
