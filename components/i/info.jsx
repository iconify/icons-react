import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzkgtbv_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzkgtbv_z"/>`,
		"fallback": "ix:info",
	});
}

export default Component;
