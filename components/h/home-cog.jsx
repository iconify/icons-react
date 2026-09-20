import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dkf4j7uob.css';
import '../../css/b/baqgdbbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dkf4j7uob"/><path class="baqgdbbvu"/></g>`,
		"fallback": "tabler:home-cog",
	});
}

export default Component;
