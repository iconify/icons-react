import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kndxs4x0z.css';
import '../../css/j/j-nnq38ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kndxs4x0z"/><path class="j-nnq38ga"/></g>`,
		"fallback": "streamline-cyber:castle-2",
	});
}

export default Component;
