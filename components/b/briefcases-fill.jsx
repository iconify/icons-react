import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0a6y8b1l.css';
import '../../css/u/u407k86qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0a6y8b1l"/><path class="u407k86qy"/>`,
		"fallback": "si:briefcases-fill",
	});
}

export default Component;
