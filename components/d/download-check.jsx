import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krahz-g9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krahz-g9a"/>`,
		"fallback": "noviair-light:download-check",
	});
}

export default Component;
