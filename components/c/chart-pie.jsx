import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm66mfb8k.css';
import '../../css/k/k7rdutbey.css';
import '../../css/d/d1vzate5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm66mfb8k wm-k"/><path class="k7rdutbey wm-k"/><path class="d1vzate5o wm-a"/>`,
		"fallback": "withicons-bauhaus:chart-pie",
	});
}

export default Component;
