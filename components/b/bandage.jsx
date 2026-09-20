import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdtot9bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdtot9bcs"/>`,
		"fallback": "tabler:bandage",
	});
}

export default Component;
