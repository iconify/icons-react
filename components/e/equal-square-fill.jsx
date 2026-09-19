import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv0asac4q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv0asac4q"/>`,
		"fallback": "f7:equal-square-fill",
	});
}

export default Component;
