import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_p2r6ryq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_p2r6ryq"/>`,
		"fallback": "file-icons:creole",
	});
}

export default Component;
