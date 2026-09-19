import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5j38abkl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5j38abkl"/>`,
		"fallback": "fluent-emoji-flat:hollow-red-circle",
	});
}

export default Component;
