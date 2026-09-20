import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kko3h3bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kko3h3bui"/>`,
		"fallback": "ri:image-add-line",
	});
}

export default Component;
