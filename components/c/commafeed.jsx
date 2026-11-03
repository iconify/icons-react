import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scv3-lbfi.css';
import '../../css/z/zlknd4b1p.css';
import '../../css/o/o6k9xwbor.css';

const viewBox = {"width":6.563,"height":6.563};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="scv3-lbfi"/><path class="zlknd4b1p"/><path class="o6k9xwbor"/>`,
		"fallback": "thesvg-color:commafeed",
	});
}

export default Component;
