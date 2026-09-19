import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdxbv3bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdxbv3bpf"/>`,
		"fallback": "boxicons:cricket-ball-filled",
	});
}

export default Component;
