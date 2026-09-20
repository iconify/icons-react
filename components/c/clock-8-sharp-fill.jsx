import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1b6u2bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1b6u2bgo"/>`,
		"fallback": "keyline-icons:clock-8-sharp-fill",
	});
}

export default Component;
