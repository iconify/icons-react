import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmg2m37bs.css';
import '../../css/n/nhc23403f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zmg2m37bs"/><path class="nhc23403f"/></g>`,
		"fallback": "tabler:headphones-off",
	});
}

export default Component;
