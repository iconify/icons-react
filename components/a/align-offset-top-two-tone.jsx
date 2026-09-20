import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/ly67rybbe.css';
import '../../css/b/bvpe1-nac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ly67rybbe"/><path class="bvpe1-nac"/></g>`,
		"fallback": "keyline-icons:align-offset-top-two-tone",
	});
}

export default Component;
