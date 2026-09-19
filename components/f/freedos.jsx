import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw36togob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw36togob"/>`,
		"fallback": "file-icons:freedos",
	});
}

export default Component;
