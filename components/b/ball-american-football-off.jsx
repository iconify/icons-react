import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_dltpb6i.css';
import '../../css/o/oc7ge1b7s.css';
import '../../css/x/xuoae4b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x_dltpb6i"/><path class="oc7ge1b7s"/><path class="xuoae4b6p"/></g>`,
		"fallback": "tabler:ball-american-football-off",
	});
}

export default Component;
