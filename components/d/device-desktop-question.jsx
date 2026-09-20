import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vesmpot6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vesmpot6n"/>`,
		"fallback": "tabler:device-desktop-question",
	});
}

export default Component;
