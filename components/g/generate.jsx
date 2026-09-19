import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bez4ssb6x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bez4ssb6x"/>`,
		"fallback": "fluent-mdl2:generate",
	});
}

export default Component;
