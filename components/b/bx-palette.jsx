import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4wxqtb9k.css';
import '../../css/i/i41e6pm1x.css';
import '../../css/l/l1tdjlb-d.css';
import '../../css/b/b12gxvr_k.css';
import '../../css/u/uqsohbb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4wxqtb9k"/><circle class="i41e6pm1x"/><circle class="l1tdjlb-d"/><circle class="b12gxvr_k"/><circle class="uqsohbb5z"/>`,
		"fallback": "bx:bx-palette",
	});
}

export default Component;
