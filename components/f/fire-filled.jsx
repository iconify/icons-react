import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-n68_bpn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-n68_bpn"/>`,
		"fallback": "ant-design:fire-filled",
	});
}

export default Component;
