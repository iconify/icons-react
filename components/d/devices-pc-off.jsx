import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu8vh-i6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu8vh-i6n"/>`,
		"fallback": "tabler:devices-pc-off",
	});
}

export default Component;
