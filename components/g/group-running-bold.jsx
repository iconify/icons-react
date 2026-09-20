import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2xth7b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2xth7b_j"/>`,
		"fallback": "streamline-ultimate:group-running-bold",
	});
}

export default Component;
