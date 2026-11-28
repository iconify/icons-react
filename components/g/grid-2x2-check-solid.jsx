import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv7a538cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv7a538cz"/>`,
		"fallback": "iconaut:grid-2x2-check-solid",
	});
}

export default Component;
