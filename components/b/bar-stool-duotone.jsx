import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqfclo1zl.css';
import '../../css/q/q8jyq5bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bqfclo1zl"/><path class="q8jyq5bmw"/></g>`,
		"fallback": "reicon:bar-stool-duotone",
	});
}

export default Component;
