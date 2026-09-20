import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhagugp9o.css';
import '../../css/j/j9pc2hj6u.css';
import '../../css/q/qqau8en3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lhagugp9o"/><path class="j9pc2hj6u"/><path class="qqau8en3e"/></g>`,
		"fallback": "tabler:bus-off",
	});
}

export default Component;
