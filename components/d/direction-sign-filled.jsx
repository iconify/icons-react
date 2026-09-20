import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbva0sn3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbva0sn3s"/>`,
		"fallback": "tabler:direction-sign-filled",
	});
}

export default Component;
