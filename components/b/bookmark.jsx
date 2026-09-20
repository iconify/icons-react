import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_vz2bgl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_vz2bgl"/>`,
		"fallback": "streamline:bookmark",
	});
}

export default Component;
