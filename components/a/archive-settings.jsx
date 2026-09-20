import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfnouwb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfnouwb-d"/>`,
		"fallback": "mdi:archive-settings",
	});
}

export default Component;
