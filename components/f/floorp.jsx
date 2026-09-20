import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4z5m5b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4z5m5b8m"/>`,
		"fallback": "thesvg-color:floorp",
	});
}

export default Component;
