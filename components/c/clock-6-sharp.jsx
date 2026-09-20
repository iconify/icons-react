import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muui0pbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muui0pbzc"/>`,
		"fallback": "keyline-icons:clock-6-sharp",
	});
}

export default Component;
