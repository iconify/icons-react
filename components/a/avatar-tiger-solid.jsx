import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo_2k_dtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo_2k_dtv"/>`,
		"fallback": "withicons:avatar-tiger-solid",
	});
}

export default Component;
