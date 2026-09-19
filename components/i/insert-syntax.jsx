import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1wv3xwuv.css';
import '../../css/u/u2y96rwvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1wv3xwuv"/><path class="u2y96rwvy"/>`,
		"fallback": "carbon:insert-syntax",
	});
}

export default Component;
