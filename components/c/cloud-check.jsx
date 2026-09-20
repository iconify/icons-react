import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmfkg_j2b.css';
import '../../css/z/z0r2h759q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmfkg_j2b"/><path class="z0r2h759q"/>`,
		"fallback": "lineicons:cloud-check",
	});
}

export default Component;
