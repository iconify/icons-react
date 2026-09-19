import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3m-y_svk.css';
import '../../css/d/da4kpub6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3m-y_svk"/><path class="da4kpub6u"/>`,
		"fallback": "bxs:analyse",
	});
}

export default Component;
