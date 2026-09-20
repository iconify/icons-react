import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6hc3d11b.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6hc3d11b"/>`,
		"fallback": "maki:college-jp-11",
	});
}

export default Component;
