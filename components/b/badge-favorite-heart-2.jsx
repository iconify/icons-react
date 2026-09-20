import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/b5tneem8u.css';
import '../../css/i/iuirop1hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="b5tneem8u"/><path class="iuirop1hq"/></g>`,
		"fallback": "streamline-cyber:badge-favorite-heart-2",
	});
}

export default Component;
