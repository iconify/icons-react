import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scx1z0ypn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scx1z0ypn"/>`,
		"fallback": "stash:badge-verified-solid",
	});
}

export default Component;
