import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q40o-6b1z.css';
import '../../css/b/bs972-btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q40o-6b1z"/><path class="bs972-btf"/></g>`,
		"fallback": "tabler:bucket-off",
	});
}

export default Component;
