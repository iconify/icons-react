import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcsl11xbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcsl11xbi"/>`,
		"fallback": "game-icons:black-book",
	});
}

export default Component;
