import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8lhx-bno.css';
import '../../css/g/gacmsohwz.css';
import '../../css/u/uy0c2iw_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8lhx-bno"/><path class="gacmsohwz"/><path class="uy0c2iw_k"/></g>`,
		"fallback": "keyline-icons:credit-card-2-sparkles-duotone",
	});
}

export default Component;
