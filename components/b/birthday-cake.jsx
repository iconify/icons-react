import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyjf33b5p.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyjf33b5p"/>`,
		"fallback": "fa:birthday-cake",
	});
}

export default Component;
