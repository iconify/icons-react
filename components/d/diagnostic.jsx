import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0u3k0lff.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0u3k0lff"/>`,
		"fallback": "fluent-mdl2:diagnostic",
	});
}

export default Component;
