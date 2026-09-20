import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxtk6mbvt.css';

const viewBox = {"width":55,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxtk6mbvt"/>`,
		"fallback": "thesvg-color:aero-dark",
	});
}

export default Component;
