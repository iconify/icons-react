import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcpc46bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcpc46bqg"/>`,
		"fallback": "mdi:archive",
	});
}

export default Component;
