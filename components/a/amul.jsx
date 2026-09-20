import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue7j03b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue7j03b4s"/>`,
		"fallback": "simple-icons:amul",
	});
}

export default Component;
