import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxqn-s10j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxqn-s10j"/>`,
		"fallback": "cbi:etihad-airways",
	});
}

export default Component;
