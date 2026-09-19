import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfc3gybyq.css';

const viewBox = {"width":283,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfc3gybyq"/>`,
		"fallback": "file-icons:ballerina",
	});
}

export default Component;
