import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdezvif_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdezvif_q"/>`,
		"fallback": "streamline:car-taxi-1-remix",
	});
}

export default Component;
