import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv5_0figd.css';
import '../../css/c/cburmm70s.css';
import '../../css/z/zc9vryf_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qv5_0figd"/><path class="cburmm70s"/><path class="zc9vryf_n"/></g>`,
		"fallback": "fluent-emoji-flat:hammer-and-wrench",
	});
}

export default Component;
