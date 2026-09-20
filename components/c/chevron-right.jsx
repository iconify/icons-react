import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biybr5bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biybr5bbk"/>`,
		"fallback": "mdi-light:chevron-right",
	});
}

export default Component;
