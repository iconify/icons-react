import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szr2kr31a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szr2kr31a"/>`,
		"fallback": "noviair-light:briefcase-x",
	});
}

export default Component;
