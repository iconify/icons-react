import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd_kjk6cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd_kjk6cf"/>`,
		"fallback": "tdesign:arrow-up-down-2",
	});
}

export default Component;
