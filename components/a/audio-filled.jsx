import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_s0f7s9b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_s0f7s9b"/>`,
		"fallback": "ant-design:audio-filled",
	});
}

export default Component;
