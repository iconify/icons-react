import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/e/ekthx6-7i.css';
import '../../css/m/mwl13xblr.css';
import '../../css/m/moqlwkbsu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="ekthx6-7i"/><path class="mwl13xblr"/><path class="moqlwkbsu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-south-sudan",
	});
}

export default Component;
