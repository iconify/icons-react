import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-z3qw_6i.css';
import '../../css/v/vslz5yb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z-z3qw_6i"/><path class="vslz5yb3q"/></g>`,
		"fallback": "coolicons:divide-duocolor-round",
	});
}

export default Component;
