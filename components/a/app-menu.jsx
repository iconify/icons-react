import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh1omzxpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fh1omzxpe"/>`,
		"fallback": "ix:app-menu",
	});
}

export default Component;
