import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcdz5x3sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcdz5x3sn"/>`,
		"fallback": "thesvg-color:ana",
	});
}

export default Component;
