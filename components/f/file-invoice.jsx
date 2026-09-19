import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hobd9v3ai.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hobd9v3ai"/>`,
		"fallback": "fa-solid:file-invoice",
	});
}

export default Component;
