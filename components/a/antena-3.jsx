import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_2qu44bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_2qu44bf"/>`,
		"fallback": "thesvg-color:antena-3",
	});
}

export default Component;
