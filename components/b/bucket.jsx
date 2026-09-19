import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/annsufbjl.css';
import '../../css/k/kj4071ede.css';
import '../../css/l/l_l0g1bwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="annsufbjl"/><path class="kj4071ede"/><path class="l_l0g1bwf"/></g>`,
		"fallback": "fluent-emoji-flat:bucket",
	});
}

export default Component;
