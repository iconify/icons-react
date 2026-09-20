import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k55c0si5c.css';
import '../../css/m/mirqvk4_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="k55c0si5c"/><path class="mirqvk4_e"/></g>`,
		"fallback": "streamline-cyber:bank-note-1",
	});
}

export default Component;
