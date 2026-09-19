import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohz0agb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohz0agb6n"/>`,
		"fallback": "griddy-icons:halloween-wizard-hat",
	});
}

export default Component;
