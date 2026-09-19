import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctj3b1blo.css';
import '../../css/a/a7ms1gb6t.css';
import '../../css/s/s77fccc8h.css';
import '../../css/w/wla87uw1c.css';
import '../../css/x/xad76ubit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctj3b1blo"/><path class="a7ms1gb6t"/><g class="s77fccc8h"><circle class="wla87uw1c"/><path class="xad76ubit"/></g>`,
		"fallback": "flat-color-icons:contacts",
	});
}

export default Component;
