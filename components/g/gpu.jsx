import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cd_x0n3ko.css';
import '../../css/h/h7zu85-xk.css';
import '../../css/d/dgg_3-5dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cd_x0n3ko"/><circle class="h7zu85-xk"/><circle class="dgg_3-5dy"/></g>`,
		"fallback": "lucide:gpu",
	});
}

export default Component;
