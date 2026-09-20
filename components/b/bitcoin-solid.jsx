import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmft1cb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmft1cb1y"/>`,
		"fallback": "mynaui:bitcoin-solid",
	});
}

export default Component;
