import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8p50493h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8p50493h"/>`,
		"fallback": "fluent-emoji-flat:heart-exclamation",
	});
}

export default Component;
