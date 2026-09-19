import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/malb5obyq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="malb5obyq"/>`,
		"fallback": "fluent-emoji-high-contrast:film-frames",
	});
}

export default Component;
