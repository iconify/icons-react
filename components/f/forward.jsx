import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgc40abje.css';
import '../../css/m/m4c_7u5go.css';
import '../../css/r/rxsvazbuv.css';
import '../../css/j/j-gltbc1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qgc40abje wm-shadow"/><path class="m4c_7u5go wm-shadow"/><path class="rxsvazbuv"/><path class="j-gltbc1l"/></g>`,
		"fallback": "withicons-brutal:forward",
	});
}

export default Component;
