import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t73q5-q3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t73q5-q3m"/>`,
		"fallback": "proicons:bug",
	});
}

export default Component;
