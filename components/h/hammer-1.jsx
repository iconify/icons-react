import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2p1d0b1v.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2p1d0b1v"/>`,
		"fallback": "lineicons:hammer-1",
	});
}

export default Component;
