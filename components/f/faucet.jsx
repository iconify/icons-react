import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd0nk4_nu.css';
import '../../css/d/dqolircih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gd0nk4_nu"/><circle class="dqolircih"/></g>`,
		"fallback": "lucide:faucet",
	});
}

export default Component;
