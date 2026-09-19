import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qagp4hexa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qagp4hexa"/>`,
		"fallback": "ci:arrow-circle-down-left",
	});
}

export default Component;
