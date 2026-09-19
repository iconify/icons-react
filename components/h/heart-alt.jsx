import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4ygkcb7p.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4ygkcb7p"/>`,
		"fallback": "el:heart-alt",
	});
}

export default Component;
