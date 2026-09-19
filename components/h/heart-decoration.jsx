import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsx_icc1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsx_icc1a"/>`,
		"fallback": "fluent-emoji-high-contrast:heart-decoration",
	});
}

export default Component;
