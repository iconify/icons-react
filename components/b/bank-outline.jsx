import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv6br_-mv.css';
import '../../css/c/ca-rzg1lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dv6br_-mv"/><path class="ca-rzg1lt"/>`,
		"fallback": "basil:bank-outline",
	});
}

export default Component;
