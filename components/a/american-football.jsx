import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3f0rzbgw.css';
import '../../css/d/d7iqucb8k.css';
import '../../css/r/r7ldvdbgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3f0rzbgw"/><path class="d7iqucb8k"/><path class="r7ldvdbgu"/></g>`,
		"fallback": "fluent-emoji-flat:american-football",
	});
}

export default Component;
