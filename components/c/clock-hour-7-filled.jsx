import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boe6k9bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boe6k9bvf"/>`,
		"fallback": "tabler:clock-hour-7-filled",
	});
}

export default Component;
