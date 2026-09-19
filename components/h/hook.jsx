import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnq77hb6c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnq77hb6c"/>`,
		"fallback": "fluent-emoji-flat:hook",
	});
}

export default Component;
