import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riduzfbwy.css';

const viewBox = {"width":331,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riduzfbwy"/>`,
		"fallback": "file-icons:finaldraft",
	});
}

export default Component;
