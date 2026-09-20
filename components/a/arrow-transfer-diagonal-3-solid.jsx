import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj3fw5t9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj3fw5t9p"/>`,
		"fallback": "streamline:arrow-transfer-diagonal-3-solid",
	});
}

export default Component;
