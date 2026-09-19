import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e6a8jxvgy.css';
import '../../css/h/hcjfafx2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e6a8jxvgy"/><path class="hcjfafx2w"/></g>`,
		"fallback": "akar-icons:arrow-back",
	});
}

export default Component;
