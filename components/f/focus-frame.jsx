import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnvisfy4c.css';
import '../../css/m/m3qmq7bst.css';
import '../../css/s/ss_bl2bpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pnvisfy4c"/><path class="m3qmq7bst"/><path class="ss_bl2bpe"/></g>`,
		"fallback": "streamline-flex-color:focus-frame",
	});
}

export default Component;
