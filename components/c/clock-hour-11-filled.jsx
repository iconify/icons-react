import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0c8dvbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0c8dvbfy"/>`,
		"fallback": "tabler:clock-hour-11-filled",
	});
}

export default Component;
