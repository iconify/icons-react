import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtx179f9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtx179f9i"/>`,
		"fallback": "cuida:heading3-outline",
	});
}

export default Component;
