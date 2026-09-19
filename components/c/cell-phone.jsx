import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee1qu28wn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee1qu28wn"/>`,
		"fallback": "fluent-mdl2:cell-phone",
	});
}

export default Component;
