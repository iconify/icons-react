import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tphv1z1vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tphv1z1vt"/>`,
		"fallback": "mingcute:high-temperature-fill",
	});
}

export default Component;
