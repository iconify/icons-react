import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yur87nwye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yur87nwye"/>`,
		"fallback": "tabler:droplet-minus",
	});
}

export default Component;
