import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eljz2sbcz.css';
import '../../css/r/rdhz0000q.css';
import '../../css/t/t4ebpfb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eljz2sbcz"/><path class="rdhz0000q"/><path clip-rule="evenodd" class="t4ebpfb7r"/>`,
		"fallback": "lineicons:certificate-badge-1",
	});
}

export default Component;
