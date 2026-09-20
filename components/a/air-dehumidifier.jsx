import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbk7ft81q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbk7ft81q"/>`,
		"fallback": "mdi:air-dehumidifier",
	});
}

export default Component;
