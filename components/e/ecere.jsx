import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll1hldbrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll1hldbrq"/>`,
		"fallback": "file-icons:ecere",
	});
}

export default Component;
