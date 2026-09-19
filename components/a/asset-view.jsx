import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmhddevn.css';
import '../../css/a/avi7ktl-p.css';
import '../../css/e/e_wydyb-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lgmhddevn"/><path class="avi7ktl-p"/><path class="e_wydyb-d"/>`,
		"fallback": "carbon:asset-view",
	});
}

export default Component;
