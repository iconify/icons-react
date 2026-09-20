import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/m/m66rpgbeg.css';
import '../../css/a/a9ant_31z.css';
import '../../css/r/rz_97db5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="m66rpgbeg"/><path class="a9ant_31z"/><path class="rz_97db5a"/></g>`,
		"fallback": "lets-icons:direction",
	});
}

export default Component;
