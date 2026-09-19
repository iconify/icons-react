import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpg-xvqnb.css';
import '../../css/s/si6_izbqe.css';
import '../../css/b/bfe7iwbvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lpg-xvqnb"/><path class="si6_izbqe"/><path class="bfe7iwbvy"/></g>`,
		"fallback": "fluent-emoji-flat:hut",
	});
}

export default Component;
