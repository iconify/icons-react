import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuiuvkpsm.css';
import '../../css/l/lf8k7bc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zuiuvkpsm"/><path class="lf8k7bc1k"/></g>`,
		"fallback": "tdesign:coordinate-system",
	});
}

export default Component;
