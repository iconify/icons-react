import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/d/d8561dbcl.css';
import '../../css/s/sur6g4xqv.css';
import '../../css/r/rw4ic0bsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="d8561dbcl"/><path class="sur6g4xqv"/><path class="rw4ic0bsf"/></g>`,
		"fallback": "icon-park:drop-down-list",
	});
}

export default Component;
