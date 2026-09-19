import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyp2mwbic.css';
import '../../css/k/ki937_vam.css';
import '../../css/b/b6bcodz8n.css';
import '../../css/e/e-ggbq2as.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyp2mwbic"/><g class="ki937_vam"><path class="b6bcodz8n"/><path class="e-ggbq2as"/></g>`,
		"fallback": "flat-color-icons:data-backup",
	});
}

export default Component;
