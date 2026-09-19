import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6z0rhxtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6z0rhxtt"/>`,
		"fallback": "boxicons:ease-in-out-filled",
	});
}

export default Component;
