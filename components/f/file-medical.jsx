import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm6nu5b6w.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm6nu5b6w"/>`,
		"fallback": "fa-solid:file-medical",
	});
}

export default Component;
