import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhjow86iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhjow86iw"/>`,
		"fallback": "tabler:filter-plus",
	});
}

export default Component;
