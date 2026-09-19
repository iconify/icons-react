import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r046gcc4f.css';
import '../../css/f/f7m0-ntgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b r046gcc4f"/><path class="b f7m0-ntgd"/>`,
		"fallback": "boxicons:gradient",
	});
}

export default Component;
