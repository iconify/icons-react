import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev5fk9umj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev5fk9umj"/>`,
		"fallback": "uim:angle-double-right",
	});
}

export default Component;
