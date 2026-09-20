import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8dx0dv6f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8dx0dv6f"/>`,
		"fallback": "pinhead:analog-tv-with-rabbitears",
	});
}

export default Component;
