import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmoujxouz.css';

const viewBox = {"width":225,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmoujxouz"/>`,
		"fallback": "file-icons:gulp",
	});
}

export default Component;
