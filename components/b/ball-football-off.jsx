import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl77k1wmo.css';
import '../../css/m/mbhuwybop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dl77k1wmo"/><path class="mbhuwybop"/></g>`,
		"fallback": "tabler:ball-football-off",
	});
}

export default Component;
