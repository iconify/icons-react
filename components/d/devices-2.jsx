import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d922dccat.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d922dccat"/>`,
		"fallback": "fluent-mdl2:devices-2",
	});
}

export default Component;
