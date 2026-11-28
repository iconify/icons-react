import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j363u8mvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j363u8mvp"/>`,
		"fallback": "noviair-light:cow",
	});
}

export default Component;
