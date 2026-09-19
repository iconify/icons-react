import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/galb7gc_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="galb7gc_y"/>`,
		"fallback": "fluent-emoji-flat:end-arrow",
	});
}

export default Component;
