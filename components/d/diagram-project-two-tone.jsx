import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq3id0t8d.css';
import '../../css/b/b8wm3g5kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tq3id0t8d"/><path class="b8wm3g5kv"/></g>`,
		"fallback": "keyline-icons:diagram-project-two-tone",
	});
}

export default Component;
