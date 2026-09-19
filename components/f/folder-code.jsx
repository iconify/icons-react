import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/n/n8txsybzr.css';
import '../../css/s/s_fib0byi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="n8txsybzr"/><path class="s_fib0byi"/></g>`,
		"fallback": "icon-park:folder-code",
	});
}

export default Component;
