import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4hg5_b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4hg5_b1h"/>`,
		"fallback": "simple-icons:bit",
	});
}

export default Component;
