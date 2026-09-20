import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8omf1bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8omf1bsu"/>`,
		"fallback": "tabler:bell-ringing-2-filled",
	});
}

export default Component;
