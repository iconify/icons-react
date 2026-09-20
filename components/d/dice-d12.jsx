import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aca8y6bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aca8y6bjq"/>`,
		"fallback": "mdi:dice-d12",
	});
}

export default Component;
