import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga2uribhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga2uribhs"/>`,
		"fallback": "noviair-light:id-card-search",
	});
}

export default Component;
