import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmva9bc_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmva9bc_d"/>`,
		"fallback": "icomoon-free:evil2",
	});
}

export default Component;
