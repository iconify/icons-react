import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vayjv7ded.css';
import '../../css/k/kxhfrachd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vayjv7ded"/><path class="kxhfrachd"/></g>`,
		"fallback": "tabler:home-share",
	});
}

export default Component;
