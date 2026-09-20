import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wngwu12gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wngwu12gm"/>`,
		"fallback": "tabler:badge-ar-filled",
	});
}

export default Component;
