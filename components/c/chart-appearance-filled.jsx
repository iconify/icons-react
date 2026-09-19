import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duzeihb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duzeihb6s"/>`,
		"fallback": "griddy-icons:chart-appearance-filled",
	});
}

export default Component;
