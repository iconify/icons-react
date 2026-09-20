import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ridq9kr5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ridq9kr5m"/>`,
		"fallback": "uiw:cloud-download-o",
	});
}

export default Component;
