import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdiwa3b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdiwa3b_n"/>`,
		"fallback": "streamline-sharp:battery-empty-2-remix",
	});
}

export default Component;
