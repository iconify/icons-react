import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji099hjer.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji099hjer"/>`,
		"fallback": "fa6-regular:file",
	});
}

export default Component;
