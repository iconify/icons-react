import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocs2_-bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocs2_-bnx"/>`,
		"fallback": "tabler:blur-off",
	});
}

export default Component;
