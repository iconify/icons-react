import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-9jg-byf.css';
import '../../css/b/bqyya73dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g-9jg-byf"/><path class="bqyya73dg"/></g>`,
		"fallback": "withicons:dumbbell-sketch",
	});
}

export default Component;
