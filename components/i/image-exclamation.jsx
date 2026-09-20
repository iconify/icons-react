import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc3bqvbgb.css';
import '../../css/i/i6107pbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc3bqvbgb"/><path class="i6107pbis"/>`,
		"fallback": "stash:image-exclamation",
	});
}

export default Component;
