import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-rra7bzy.css';
import '../../css/b/b37ix8jjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-rra7bzy"/><path class="b37ix8jjd"/></g>`,
		"fallback": "keyline-icons:headset-duotone",
	});
}

export default Component;
