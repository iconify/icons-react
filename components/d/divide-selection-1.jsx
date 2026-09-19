import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npijxd65r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npijxd65r"/>`,
		"fallback": "iconoir:divide-selection-1",
	});
}

export default Component;
