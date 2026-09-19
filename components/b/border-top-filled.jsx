import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogmr8h0tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogmr8h0tt"/>`,
		"fallback": "boxicons:border-top-filled",
	});
}

export default Component;
