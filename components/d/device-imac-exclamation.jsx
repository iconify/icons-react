import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iavnjsv5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iavnjsv5j"/>`,
		"fallback": "tabler:device-imac-exclamation",
	});
}

export default Component;
