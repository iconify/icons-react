import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpi9_ac9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpi9_ac9t"/>`,
		"fallback": "heroicons:arrow-trending-down-solid",
	});
}

export default Component;
