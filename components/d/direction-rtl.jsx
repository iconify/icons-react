import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd4a16fbn.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd4a16fbn"/>`,
		"fallback": "lineicons:direction-rtl",
	});
}

export default Component;
