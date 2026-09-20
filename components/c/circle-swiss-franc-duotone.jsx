import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2u3clbzs.css';
import '../../css/o/ow5_35b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2u3clbzs"/><path class="ow5_35b5o"/></g>`,
		"fallback": "keyline-icons:circle-swiss-franc-duotone",
	});
}

export default Component;
