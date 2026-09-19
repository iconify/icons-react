import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3_mn_6bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3_mn_6bv"/>`,
		"fallback": "guidance:home-2",
	});
}

export default Component;
