import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygp9ilbci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ygp9ilbci"/>`,
		"fallback": "fluent-emoji-high-contrast:hundred-points",
	});
}

export default Component;
