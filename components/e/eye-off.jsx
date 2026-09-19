import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjh4gqbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjh4gqbuq"/>`,
		"fallback": "humbleicons:eye-off",
	});
}

export default Component;
