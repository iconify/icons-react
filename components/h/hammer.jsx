import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z2-ar1bdd.css';
import '../../css/j/jxbi3y9yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z2-ar1bdd"/><path class="jxbi3y9yw"/></g>`,
		"fallback": "hugeicons:hammer",
	});
}

export default Component;
