import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg4551bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg4551bmt"/>`,
		"fallback": "boxicons:alarm-exclamation-filled",
	});
}

export default Component;
