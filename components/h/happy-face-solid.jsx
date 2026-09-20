import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbyw4pyrs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbyw4pyrs"/>`,
		"fallback": "streamline:happy-face-solid",
	});
}

export default Component;
