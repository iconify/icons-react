import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkbcc_bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bkbcc_bfm"/>`,
		"fallback": "iconoir:check-circle-solid",
	});
}

export default Component;
