import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwejsnb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwejsnb3i"/>`,
		"fallback": "tabler:arrow-big-right-filled",
	});
}

export default Component;
