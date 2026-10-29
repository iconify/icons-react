import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yz457tbdl.css';
import '../../css/y/y8lg13ekt.css';
import '../../css/g/gqtgxvbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yz457tbdl"/><path class="y8lg13ekt"/><path class="gqtgxvbun"/></g>`,
		"fallback": "withicons-bauhaus:car-front",
	});
}

export default Component;
