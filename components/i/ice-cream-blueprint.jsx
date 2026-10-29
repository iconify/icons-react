import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z832h1bns.css';
import '../../css/g/gwy3bbbxn.css';
import '../../css/x/xzjbldrua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z832h1bns"/><path class="gwy3bbbxn wm-k"/><path class="wm-a xzjbldrua"/></g>`,
		"fallback": "withicons:ice-cream-blueprint",
	});
}

export default Component;
