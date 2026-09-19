import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt53aw8su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mt53aw8su"/>`,
		"fallback": "griddy-icons:eftpos-filled",
	});
}

export default Component;
