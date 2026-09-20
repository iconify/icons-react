import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x486k7kau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x486k7kau"/>`,
		"fallback": "tabler:clock-filled",
	});
}

export default Component;
