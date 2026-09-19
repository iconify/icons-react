import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eckk_6b8x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eckk_6b8x"/>`,
		"fallback": "fluent-mdl2:double-bookmark",
	});
}

export default Component;
