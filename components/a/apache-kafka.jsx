import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqkwdi4fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqkwdi4fs"/>`,
		"fallback": "mdi:apache-kafka",
	});
}

export default Component;
