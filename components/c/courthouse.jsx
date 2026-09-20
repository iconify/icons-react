import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/v/v72zxwviq.css';
import '../../css/b/bci2onbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="v72zxwviq"/><path class="bci2onbpo"/></g>`,
		"fallback": "reicon:courthouse",
	});
}

export default Component;
