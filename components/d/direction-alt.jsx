import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/s/s3p8xob-s.css';
import '../../css/r/rz_97db5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="s3p8xob-s"/><path class="rz_97db5a"/></g>`,
		"fallback": "lets-icons:direction-alt",
	});
}

export default Component;
