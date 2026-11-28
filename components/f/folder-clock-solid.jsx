import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh26h9acs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh26h9acs"/>`,
		"fallback": "iconaut:folder-clock-solid",
	});
}

export default Component;
