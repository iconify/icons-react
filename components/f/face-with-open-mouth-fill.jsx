import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjbf6hs1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rjbf6hs1e"/>`,
		"fallback": "iconamoon:face-with-open-mouth-fill",
	});
}

export default Component;
