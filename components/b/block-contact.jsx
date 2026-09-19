import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9hcmacxk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9hcmacxk"/>`,
		"fallback": "fluent-mdl2:block-contact",
	});
}

export default Component;
