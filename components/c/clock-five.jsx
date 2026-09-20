import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_44q3bqb.css';
import '../../css/c/chv7bcx-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_44q3bqb"/><path class="chv7bcx-u"/>`,
		"fallback": "uim:clock-five",
	});
}

export default Component;
