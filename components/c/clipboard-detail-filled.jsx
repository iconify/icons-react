import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3q756b1j.css';
import '../../css/p/pd-a0f94r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3q756b1j"/><path class="pd-a0f94r"/>`,
		"fallback": "boxicons:clipboard-detail-filled",
	});
}

export default Component;
