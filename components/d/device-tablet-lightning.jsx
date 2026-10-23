import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgha40b5l.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/f/fb6kjxo-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tgha40b5l"/><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path class="fb6kjxo-e"/></g>`,
		"fallback": "andrsrxn:device-tablet-lightning",
	});
}

export default Component;
