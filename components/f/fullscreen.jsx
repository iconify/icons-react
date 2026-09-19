import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbr2puogx.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbr2puogx"/>`,
		"fallback": "zmdi:fullscreen",
	});
}

export default Component;
