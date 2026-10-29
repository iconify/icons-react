import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgd91db1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgd91db1m"/>`,
		"fallback": "withicons:book-solid",
	});
}

export default Component;
