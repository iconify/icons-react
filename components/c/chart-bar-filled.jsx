import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir9h4mb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ir9h4mb5m"/>`,
		"fallback": "griddy-icons:chart-bar-filled",
	});
}

export default Component;
