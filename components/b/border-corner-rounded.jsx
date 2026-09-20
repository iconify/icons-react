import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyik3ye0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyik3ye0v"/>`,
		"fallback": "tabler:border-corner-rounded",
	});
}

export default Component;
