import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogp3kachq.css';
import '../../css/c/ceh3nbbjr.css';
import '../../css/n/nuph4koxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogp3kachq"/><path class="ceh3nbbjr"/><path class="nuph4koxg"/>`,
		"fallback": "fxemoji:daggerknife",
	});
}

export default Component;
