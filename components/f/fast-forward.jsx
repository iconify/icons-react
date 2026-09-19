import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul6cc9b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ul6cc9b9m"/>`,
		"fallback": "griddy-icons:fast-forward",
	});
}

export default Component;
