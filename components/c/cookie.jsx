import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwhpnrv1q.css';

const viewBox = {"width":432,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwhpnrv1q"/>`,
		"fallback": "ps:cookie",
	});
}

export default Component;
