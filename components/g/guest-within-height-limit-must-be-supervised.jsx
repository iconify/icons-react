import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7d39lbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7d39lbsn"/>`,
		"fallback": "guidance:guest-within-height-limit-must-be-supervised",
	});
}

export default Component;
