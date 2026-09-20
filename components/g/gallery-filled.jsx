import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7tbtit9u.css';
import '../../css/k/kv362ebdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i7tbtit9u"/><path clip-rule="evenodd" class="kv362ebdc"/></g>`,
		"fallback": "reicon:gallery-filled",
	});
}

export default Component;
