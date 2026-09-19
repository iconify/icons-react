import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idjypyzkq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idjypyzkq"/>`,
		"fallback": "f7:camera-rotate-fill",
	});
}

export default Component;
