import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vocuwk81g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vocuwk81g"/>`,
		"fallback": "tabler:info-square-rounded-filled",
	});
}

export default Component;
