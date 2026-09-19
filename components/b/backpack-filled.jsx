import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx3vhjg1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx3vhjg1k"/>`,
		"fallback": "griddy-icons:backpack-filled",
	});
}

export default Component;
