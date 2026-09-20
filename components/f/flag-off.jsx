import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tst2p8buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tst2p8buf"/>`,
		"fallback": "lucide:flag-off",
	});
}

export default Component;
