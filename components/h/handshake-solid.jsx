import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr70wvhdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jr70wvhdj"/>`,
		"fallback": "sidekickicons:handshake-solid",
	});
}

export default Component;
