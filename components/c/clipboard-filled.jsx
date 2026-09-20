import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8g-tysng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8g-tysng"/>`,
		"fallback": "ix:clipboard-filled",
	});
}

export default Component;
