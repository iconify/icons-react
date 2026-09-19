import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v44l5dlia.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v44l5dlia"/>`,
		"fallback": "fluent-mdl2:field-changed",
	});
}

export default Component;
