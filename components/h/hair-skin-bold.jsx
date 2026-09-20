import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tze26ka-q.css';
import '../../css/g/gpipap9iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tze26ka-q"/><path class="gpipap9iy"/>`,
		"fallback": "streamline-ultimate:hair-skin-bold",
	});
}

export default Component;
