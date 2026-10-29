import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nlwenabsa.css';
import '../../css/v/v4c1xtb6h.css';
import '../../css/b/bdpci9jbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nlwenabsa"/><path class="v4c1xtb6h"/><path class="bdpci9jbw"/></g>`,
		"fallback": "withicons-bauhaus:chocolate-box",
	});
}

export default Component;
