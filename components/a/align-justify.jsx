import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf0x807yc.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf0x807yc"/>`,
		"fallback": "el:align-justify",
	});
}

export default Component;
