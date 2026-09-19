import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a91pdm37g.css';
import '../../css/c/cd8txwljy.css';
import '../../css/k/klacz1bra.css';
import '../../css/h/h2zgbmbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a91pdm37g"/><path clip-rule="evenodd" class="cd8txwljy"/><path class="klacz1bra"/><path class="h2zgbmbcp"/></g>`,
		"fallback": "healthicons:2g",
	});
}

export default Component;
