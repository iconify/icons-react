import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgrpe129w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgrpe129w"/>`,
		"fallback": "fluent-mdl2:dictionary-remove",
	});
}

export default Component;
