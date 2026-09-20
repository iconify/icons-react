import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2uhjf62d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2uhjf62d"/>`,
		"fallback": "ix:copy-filled",
	});
}

export default Component;
