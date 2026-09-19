import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7s-6cbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7s-6cbdv"/>`,
		"fallback": "griddy-icons:halloween-wizard-hat-filled",
	});
}

export default Component;
