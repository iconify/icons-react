import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htg1gvych.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htg1gvych"/>`,
		"fallback": "tabler:align-box-right-middle-filled",
	});
}

export default Component;
