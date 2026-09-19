import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uayhwehie.css';
import '../../css/b/bm73ro2ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uayhwehie"/><path class="bm73ro2ie"/>`,
		"fallback": "bxs:bookmarks",
	});
}

export default Component;
