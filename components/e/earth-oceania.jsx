import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st8g0vigt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st8g0vigt"/>`,
		"fallback": "fa7-solid:earth-oceania",
	});
}

export default Component;
