import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m9bikobno.css';
import '../../css/k/kb0q22bdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="m9bikobno"/><path class="kb0q22bdl"/></g>`,
		"fallback": "icon-park-outline:announcement",
	});
}

export default Component;
