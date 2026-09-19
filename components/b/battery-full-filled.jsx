import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_298ebcy.css';
import '../../css/q/qou13c05m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d_298ebcy"/><path class="qou13c05m"/>`,
		"fallback": "bitcoin-icons:battery-full-filled",
	});
}

export default Component;
