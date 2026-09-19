import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh5lc4bpf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh5lc4bpf"/>`,
		"fallback": "ant-design:instagram-filled",
	});
}

export default Component;
