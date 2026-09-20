import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/f/f70e-o46f.css';
import '../../css/j/jnuktt31k.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="f70e-o46f"/><path class="jnuktt31k"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:circle-big-circle",
	});
}

export default Component;
