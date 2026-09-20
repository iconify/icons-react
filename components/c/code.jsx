import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fc8-g1bvj.css';
import '../../css/h/hy12j1abm.css';
import '../../css/r/r1fxoub4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fc8-g1bvj"/><path class="hy12j1abm"/><path class="r1fxoub4g"/></g>`,
		"fallback": "pepicons-pencil:code",
	});
}

export default Component;
