import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-76lk_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-76lk_m"/>`,
		"fallback": "mynaui:cog-four-solid",
	});
}

export default Component;
