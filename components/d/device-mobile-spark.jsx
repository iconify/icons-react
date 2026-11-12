import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjcq7db9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjcq7db9b"/>`,
		"fallback": "tabler:device-mobile-spark",
	});
}

export default Component;
