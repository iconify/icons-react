import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj-mazb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj-mazb5c"/>`,
		"fallback": "tabler:clipboard-list-filled",
	});
}

export default Component;
