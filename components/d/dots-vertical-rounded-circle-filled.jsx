import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-9sglb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-9sglb4n"/>`,
		"fallback": "boxicons:dots-vertical-rounded-circle-filled",
	});
}

export default Component;
