import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op-dq1h6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op-dq1h6d"/>`,
		"fallback": "icomoon-free:google-plus",
	});
}

export default Component;
