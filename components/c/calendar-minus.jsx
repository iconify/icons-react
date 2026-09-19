import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pej60j-lv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pej60j-lv"/>`,
		"fallback": "fa-regular:calendar-minus",
	});
}

export default Component;
