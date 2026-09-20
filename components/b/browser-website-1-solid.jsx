import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfqbixbqc.css';
import '../../css/p/pxh-139-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfqbixbqc"/><path clip-rule="evenodd" class="pxh-139-k"/>`,
		"fallback": "streamline-plump:browser-website-1-solid",
	});
}

export default Component;
