import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlhsgq-gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlhsgq-gc"/>`,
		"fallback": "noviair-light:cake-heart",
	});
}

export default Component;
