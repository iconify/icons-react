import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed1tvcb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ed1tvcb_v"/>`,
		"fallback": "griddy-icons:currency-exchange",
	});
}

export default Component;
