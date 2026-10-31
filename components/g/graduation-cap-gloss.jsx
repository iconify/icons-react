import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg1279bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg1279bqs"/>`,
		"fallback": "withicons:graduation-cap-gloss",
	});
}

export default Component;
