import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_4rf8b5k.css';
import '../../css/y/yctwq2t0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_4rf8b5k"/><path class="yctwq2t0s"/>`,
		"fallback": "stash:espiral-book-light",
	});
}

export default Component;
