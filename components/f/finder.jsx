import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckhg4cclh.css';
import '../../css/l/l6od3hn3u.css';

const viewBox = {"width":465,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckhg4cclh"/><path class="l6od3hn3u"/>`,
		"fallback": "file-icons:finder",
	});
}

export default Component;
