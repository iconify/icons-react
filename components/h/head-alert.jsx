import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnw7ihavq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnw7ihavq"/>`,
		"fallback": "mdi:head-alert",
	});
}

export default Component;
