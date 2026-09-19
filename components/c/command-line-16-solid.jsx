import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxdpf6bpw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxdpf6bpw"/>`,
		"fallback": "heroicons:command-line-16-solid",
	});
}

export default Component;
