import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjy1m-bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjy1m-bvq"/>`,
		"fallback": "ri:chrome-fill",
	});
}

export default Component;
