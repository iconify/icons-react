import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmpy_acfb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmpy_acfb"/>`,
		"fallback": "fluent-mdl2:baseball",
	});
}

export default Component;
