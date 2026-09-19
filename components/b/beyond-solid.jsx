import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozfan2bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozfan2bwh"/>`,
		"fallback": "cbi:beyond-solid",
	});
}

export default Component;
