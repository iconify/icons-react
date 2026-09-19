import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv3yt4b5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv3yt4b5p"/>`,
		"fallback": "at-icons:arrow-down-right",
	});
}

export default Component;
