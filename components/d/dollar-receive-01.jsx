import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wam2n5bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wam2n5bje"/>`,
		"fallback": "hugeicons:dollar-receive-01",
	});
}

export default Component;
