import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8xm9jn1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8xm9jn1u"/>`,
		"fallback": "stash:asterisk",
	});
}

export default Component;
