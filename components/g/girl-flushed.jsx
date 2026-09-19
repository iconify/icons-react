import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md3g2pqyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md3g2pqyo"/>`,
		"fallback": "ps:girl-flushed",
	});
}

export default Component;
