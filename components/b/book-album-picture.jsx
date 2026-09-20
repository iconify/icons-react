import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t5fdygb4z.css';
import '../../css/v/v9l05c9yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="t5fdygb4z"/><path class="v9l05c9yi"/></g>`,
		"fallback": "streamline-cyber:book-album-picture",
	});
}

export default Component;
