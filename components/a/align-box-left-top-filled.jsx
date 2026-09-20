import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqywewn4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqywewn4o"/>`,
		"fallback": "tabler:align-box-left-top-filled",
	});
}

export default Component;
