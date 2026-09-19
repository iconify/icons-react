import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dphdgbb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dphdgbb0q"/>`,
		"fallback": "griddy-icons:archive-filled",
	});
}

export default Component;
