import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7by_b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7by_b1x"/>`,
		"fallback": "ci:edit-pencil-line-01",
	});
}

export default Component;
