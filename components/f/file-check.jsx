import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob61d0b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ob61d0b8q"/>`,
		"fallback": "prime:file-check",
	});
}

export default Component;
