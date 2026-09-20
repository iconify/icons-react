import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eoeyk94rl.css';
import '../../css/s/sbyepdbrk.css';
import '../../css/t/temif9bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eoeyk94rl"/><path class="sbyepdbrk"/><path class="temif9bxv"/></g>`,
		"fallback": "solar:columns-3-cog-outline",
	});
}

export default Component;
