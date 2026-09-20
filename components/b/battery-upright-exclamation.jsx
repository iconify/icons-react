import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egev2ubow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egev2ubow"/>`,
		"fallback": "ix:battery-upright-exclamation",
	});
}

export default Component;
