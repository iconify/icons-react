import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd5keqb7e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd5keqb7e"/>`,
		"fallback": "fluent-mdl2:form-library",
	});
}

export default Component;
