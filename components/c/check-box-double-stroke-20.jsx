import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7atsbiux.css';
import '../../css/y/yakywwbjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7atsbiux"/><path class="yakywwbjd"/>`,
		"fallback": "garden:check-box-double-stroke-20",
	});
}

export default Component;
