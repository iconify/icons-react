import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnegrza5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnegrza5u"/>`,
		"fallback": "keyline-icons:baby-boy-sharp",
	});
}

export default Component;
