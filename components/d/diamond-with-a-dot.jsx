import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uahbzrg7r.css';
import '../../css/k/kjz-bdcwf.css';
import '../../css/n/ng43d4bop.css';
import '../../css/f/fo2cscuki.css';
import '../../css/v/v48dila8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uahbzrg7r"/><path class="kjz-bdcwf"/><path class="ng43d4bop"/><path class="fo2cscuki"/><path class="v48dila8m"/></g>`,
		"fallback": "fluent-emoji-flat:diamond-with-a-dot",
	});
}

export default Component;
