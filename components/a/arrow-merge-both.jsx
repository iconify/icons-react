import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okktcyhss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okktcyhss"/>`,
		"fallback": "tabler:arrow-merge-both",
	});
}

export default Component;
