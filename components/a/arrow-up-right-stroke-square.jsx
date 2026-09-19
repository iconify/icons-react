import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9dfu13yp.css';
import '../../css/b/bn6ebpb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9dfu13yp"/><path class="bn6ebpb5p"/>`,
		"fallback": "boxicons:arrow-up-right-stroke-square",
	});
}

export default Component;
