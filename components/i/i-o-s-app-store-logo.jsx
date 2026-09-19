import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4w3hi4pl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4w3hi4pl"/>`,
		"fallback": "fluent-mdl2:i-o-s-app-store-logo",
	});
}

export default Component;
