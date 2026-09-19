import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwu26er0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwu26er0t"/>`,
		"fallback": "flowbite:briefcase-solid",
	});
}

export default Component;
