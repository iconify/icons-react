import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u951_hb6l.css';
import '../../css/s/s6pojzn3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u951_hb6l"/><path class="s6pojzn3i"/></g>`,
		"fallback": "tdesign:bamboo-shoot",
	});
}

export default Component;
