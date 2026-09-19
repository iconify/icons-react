import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnk1gt9lb.css';
import '../../css/y/y4jnwib3d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnk1gt9lb"/><path class="y4jnwib3d"/>`,
		"fallback": "icomoon-free:file-zip",
	});
}

export default Component;
