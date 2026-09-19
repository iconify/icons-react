import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aze07ox3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aze07ox3e"/>`,
		"fallback": "fontisto:car",
	});
}

export default Component;
