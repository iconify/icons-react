import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igt4slb-u.css';
import '../../css/r/rfo4zzbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igt4slb-u"/><path class="rfo4zzbxe"/>`,
		"fallback": "boxicons:arrow-out-down-square-half",
	});
}

export default Component;
