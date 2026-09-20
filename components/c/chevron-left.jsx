import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/macbvkc0p.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="macbvkc0p"/>`,
		"fallback": "jam:chevron-left",
	});
}

export default Component;
