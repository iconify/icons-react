import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh233jb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh233jb_j"/>`,
		"fallback": "withicons:database-solid",
	});
}

export default Component;
