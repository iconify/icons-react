import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7fxwoh6a.css';
import '../../css/d/dh7dtzbik.css';
import '../../css/p/prwipib7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7fxwoh6a"/><path class="dh7dtzbik"/><path class="prwipib7r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:inbox-tray",
	});
}

export default Component;
