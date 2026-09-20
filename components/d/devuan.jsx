import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejwoa9bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejwoa9bqz"/>`,
		"fallback": "thesvg-color:devuan",
	});
}

export default Component;
