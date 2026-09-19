import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qknovzb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qknovzb6y"/>`,
		"fallback": "gg:attribution",
	});
}

export default Component;
