import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nna7eebvs.css';
import '../../css/g/g9e86pbfe.css';
import '../../css/l/l9zg203ti.css';
import '../../css/g/grfewgbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nna7eebvs wm-shadow"/><path class="g9e86pbfe wm-shadow"/><path class="l9zg203ti"/><path class="grfewgbih"/></g>`,
		"fallback": "withicons-brutal:heading",
	});
}

export default Component;
