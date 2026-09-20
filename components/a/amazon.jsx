import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp52dj2tx.css';
import '../../css/y/y5ok-dbwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp52dj2tx"/><path class="y5ok-dbwn"/>`,
		"fallback": "selfhst:amazon",
	});
}

export default Component;
