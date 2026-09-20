import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyd-oac_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyd-oac_y"/>`,
		"fallback": "typcn:folder-add",
	});
}

export default Component;
