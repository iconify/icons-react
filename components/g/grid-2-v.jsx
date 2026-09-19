import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euhz4we2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euhz4we2b"/>`,
		"fallback": "circum:grid-2-v",
	});
}

export default Component;
