import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1-0mqbnj.css';
import '../../css/r/rhn1ckbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n1-0mqbnj"/><path class="rhn1ckbcz"/></g>`,
		"fallback": "tabler:brand-redhat",
	});
}

export default Component;
