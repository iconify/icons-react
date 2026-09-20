import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0268fbty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0268fbty"/>`,
		"fallback": "ix:circle-play-filled",
	});
}

export default Component;
