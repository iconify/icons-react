import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7y9q90kx.css';
import '../../css/c/cc1v39bnv.css';
import '../../css/k/kvwxyvrwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u7y9q90kx"/><path clip-rule="evenodd" class="cc1v39bnv"/><path class="kvwxyvrwd"/></g>`,
		"fallback": "streamline-plump-color:atom-flat",
	});
}

export default Component;
