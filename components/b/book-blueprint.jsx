import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yukf-6eye.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/h/ht3319b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yukf-6eye"/><path class="rbzq4bjzv wm-deco"/><path class="ht3319b2c"/></g>`,
		"fallback": "withicons:book-blueprint",
	});
}

export default Component;
