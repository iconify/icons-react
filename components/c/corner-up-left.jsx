import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m843eubsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m843eubsw"/>`,
		"fallback": "uil:corner-up-left",
	});
}

export default Component;
