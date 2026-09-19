import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a54q4sx0b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a54q4sx0b"/>`,
		"fallback": "fluent-mdl2:field-empty",
	});
}

export default Component;
