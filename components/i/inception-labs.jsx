import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei1iof_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei1iof_y"/>`,
		"fallback": "thesvg-color:inception-labs",
	});
}

export default Component;
