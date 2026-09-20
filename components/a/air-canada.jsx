import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sumq48c7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sumq48c7j"/>`,
		"fallback": "thesvg-color:air-canada",
	});
}

export default Component;
