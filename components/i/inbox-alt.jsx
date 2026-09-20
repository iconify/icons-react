import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/d/d2t-lbbbj.css';
import '../../css/g/gqmmezbgq.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="d2t-lbbbj"/><path class="gqmmezbgq"/></g>`,
		"fallback": "system-uicons:inbox-alt",
	});
}

export default Component;
