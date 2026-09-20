import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4dcgmbin.css';
import '../../css/r/rbrrr0n8o.css';
import '../../css/o/o0pca9a3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4dcgmbin"/><path class="rbrrr0n8o"/><circle class="o0pca9a3w"/></g>`,
		"fallback": "solar:folder-cog-broken",
	});
}

export default Component;
