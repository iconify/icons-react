import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a581ypb0q.css';
import '../../css/i/iqnmj947j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a581ypb0q"/><path class="iqnmj947j"/></g>`,
		"fallback": "tabler:arrow-ramp-left",
	});
}

export default Component;
