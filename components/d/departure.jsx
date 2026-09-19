import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suwu-_bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suwu-_bvm"/>`,
		"fallback": "guidance:departure",
	});
}

export default Component;
