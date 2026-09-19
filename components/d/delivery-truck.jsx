import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jauqbt3dv.css';
import '../../css/c/cd5xrx4je.css';
import '../../css/u/usa_sknbl.css';
import '../../css/j/j5tpb0ucx.css';
import '../../css/q/qgrzvzd7n.css';
import '../../css/v/vqfmdnlkv.css';
import '../../css/p/pwc4jib9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jauqbt3dv"/><path class="cd5xrx4je"/><path class="usa_sknbl"/><path class="j5tpb0ucx"/><path class="qgrzvzd7n"/><path class="vqfmdnlkv"/><path class="pwc4jib9g"/></g>`,
		"fallback": "fluent-emoji-flat:delivery-truck",
	});
}

export default Component;
