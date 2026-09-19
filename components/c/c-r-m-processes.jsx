import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piwa6zbtv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piwa6zbtv"/>`,
		"fallback": "fluent-mdl2:c-r-m-processes",
	});
}

export default Component;
