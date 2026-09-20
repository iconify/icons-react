import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efeitt0fa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efeitt0fa"/>`,
		"fallback": "streamline:browser-delete",
	});
}

export default Component;
