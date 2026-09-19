import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywn05-bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywn05-bpf"/>`,
		"fallback": "ci:arrow-up-right-sm",
	});
}

export default Component;
