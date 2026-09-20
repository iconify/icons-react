import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr96d1e5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr96d1e5h"/>`,
		"fallback": "tabler:clock-off",
	});
}

export default Component;
