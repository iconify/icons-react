import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgcm3wb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgcm3wb5f"/>`,
		"fallback": "tabler:circle-dotted-letter-w",
	});
}

export default Component;
