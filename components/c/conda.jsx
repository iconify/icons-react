import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csta3d-ey.css';

const viewBox = {"width":445,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csta3d-ey"/>`,
		"fallback": "file-icons:conda",
	});
}

export default Component;
