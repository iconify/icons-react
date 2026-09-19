import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aow2fzbpk.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/m/mnvwpbaxq.css';
import '../../css/p/pkt9ptb8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="aow2fzbpk"/><circle class="bk8ioe9xt"/><path class="mnvwpbaxq"/><path class="pkt9ptb8y"/></g>`,
		"fallback": "icon-park:court",
	});
}

export default Component;
