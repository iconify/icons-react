import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nllgqdbww.css';
import '../../css/n/n15fx4bae.css';
import '../../css/p/pzg1f1ooj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nllgqdbww"/><path class="n15fx4bae"/><path class="pzg1f1ooj"/></g>`,
		"fallback": "mage:compact-disk",
	});
}

export default Component;
