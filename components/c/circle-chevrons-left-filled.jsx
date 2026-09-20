import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfys5y2ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfys5y2ji"/>`,
		"fallback": "tabler:circle-chevrons-left-filled",
	});
}

export default Component;
