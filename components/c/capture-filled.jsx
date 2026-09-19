import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfyw0bf2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfyw0bf2g"/>`,
		"fallback": "boxicons:capture-filled",
	});
}

export default Component;
