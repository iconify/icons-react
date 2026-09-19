import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpqrq41mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpqrq41mp"/>`,
		"fallback": "ci:hide",
	});
}

export default Component;
