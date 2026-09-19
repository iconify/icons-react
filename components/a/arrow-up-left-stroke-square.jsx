import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d52at5ban.css';
import '../../css/b/bn6ebpb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d52at5ban"/><path class="bn6ebpb5p"/>`,
		"fallback": "boxicons:arrow-up-left-stroke-square",
	});
}

export default Component;
