import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn58tbcdq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn58tbcdq"/>`,
		"fallback": "ep:check",
	});
}

export default Component;
