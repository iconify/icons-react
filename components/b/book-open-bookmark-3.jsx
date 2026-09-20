import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d0ehffz-k.css';
import '../../css/a/a_4nh5bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="d0ehffz-k"/><path class="a_4nh5bhd"/></g>`,
		"fallback": "streamline-cyber:book-open-bookmark-3",
	});
}

export default Component;
