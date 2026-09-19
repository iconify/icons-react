import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn3c0xmdg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn3c0xmdg"/>`,
		"fallback": "fluent-mdl2:folder",
	});
}

export default Component;
