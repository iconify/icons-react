import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjhd4upqz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjhd4upqz"/>`,
		"fallback": "fluent-emoji-high-contrast:child",
	});
}

export default Component;
