import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5ahywaii.css';
import '../../css/a/a87wznbyn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5ahywaii"/><path class="a87wznbyn"/></g>`,
		"fallback": "fluent-emoji-flat:four-leaf-clover",
	});
}

export default Component;
