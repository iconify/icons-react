import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnbk1wqaj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnbk1wqaj"/>`,
		"fallback": "fluent-mdl2:file-h-t-m-l",
	});
}

export default Component;
