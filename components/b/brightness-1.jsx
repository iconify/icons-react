import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/f6f6hflnu.css';
import '../../css/n/nti9kfbvf.css';
import '../../css/h/hgcgqkb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="f6f6hflnu"/><path class="nti9kfbvf"/><path class="hgcgqkb2t"/></g>`,
		"fallback": "streamline-sharp-color:brightness-1",
	});
}

export default Component;
