import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp6qovbyo.css';
import '../../css/h/h0u2s0tde.css';
import '../../css/h/h68qiac8j.css';
import '../../css/k/kf3vwpb8g.css';
import '../../css/c/c4fqn2rnf.css';
import '../../css/z/zdbxmt36d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp6qovbyo"/><path class="h0u2s0tde"/><path class="h68qiac8j"/><g class="kf3vwpb8g"><circle class="c4fqn2rnf"/><circle class="zdbxmt36d"/></g>`,
		"fallback": "flat-color-icons:command-line",
	});
}

export default Component;
