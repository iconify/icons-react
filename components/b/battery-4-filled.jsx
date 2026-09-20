import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivve4qblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivve4qblq"/>`,
		"fallback": "tabler:battery-4-filled",
	});
}

export default Component;
