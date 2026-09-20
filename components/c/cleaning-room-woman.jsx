import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb2wfqv4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb2wfqv4j"/>`,
		"fallback": "streamline-sharp:cleaning-room-woman",
	});
}

export default Component;
