import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlbd1zbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlbd1zbdz"/>`,
		"fallback": "uil:eye",
	});
}

export default Component;
