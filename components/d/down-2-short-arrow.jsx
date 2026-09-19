import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb-n7kb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb-n7kb2e"/>`,
		"fallback": "guidance:down-2-short-arrow",
	});
}

export default Component;
