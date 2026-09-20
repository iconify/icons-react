import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgsttyb0g.css';
import '../../css/b/bwuus6q9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mgsttyb0g"/><path class="bwuus6q9l"/></g>`,
		"fallback": "tabler:git-branch-deleted",
	});
}

export default Component;
