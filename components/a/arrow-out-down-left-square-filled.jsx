import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5ennyb0i.css';
import '../../css/n/n5rw468eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5ennyb0i"/><path class="n5rw468eb"/>`,
		"fallback": "boxicons:arrow-out-down-left-square-filled",
	});
}

export default Component;
