import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2u3clbzs.css';
import '../../css/n/nx_v9sbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2u3clbzs"/><path class="nx_v9sbbg"/></g>`,
		"fallback": "keyline-icons:circle-pound-sterling-duotone",
	});
}

export default Component;
