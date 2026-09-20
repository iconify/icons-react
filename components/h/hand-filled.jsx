import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjq9yqxug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjq9yqxug"/>`,
		"fallback": "reicon:hand-filled",
	});
}

export default Component;
