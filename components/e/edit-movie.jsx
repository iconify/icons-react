import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w35c-da3k.css';
import '../../css/w/wnocnbc7k.css';
import '../../css/f/fvlkw7bxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w35c-da3k"/><path class="wnocnbc7k"/><path class="fvlkw7bxe"/></g>`,
		"fallback": "icon-park-outline:edit-movie",
	});
}

export default Component;
