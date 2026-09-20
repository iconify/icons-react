import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra13slu7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ra13slu7i"/>`,
		"fallback": "ix:id",
	});
}

export default Component;
