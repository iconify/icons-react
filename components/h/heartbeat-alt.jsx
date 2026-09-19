import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iio6hez7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iio6hez7j"/>`,
		"fallback": "fontisto:heartbeat-alt",
	});
}

export default Component;
