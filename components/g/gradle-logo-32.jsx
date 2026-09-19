import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he7924bdv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he7924bdv"/>`,
		"fallback": "fluent-mdl2:gradle-logo-32",
	});
}

export default Component;
