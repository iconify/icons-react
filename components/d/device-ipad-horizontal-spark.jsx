import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx9p37-xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx9p37-xz"/>`,
		"fallback": "tabler:device-ipad-horizontal-spark",
	});
}

export default Component;
