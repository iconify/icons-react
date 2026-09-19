import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9kqs_t_d.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9kqs_t_d"/>`,
		"fallback": "whh:address",
	});
}

export default Component;
