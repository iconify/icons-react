import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jk9p1cc6k.css';
import '../../css/r/ryvtvacvh.css';
import '../../css/v/v6ucn6h9j.css';
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
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="jk9p1cc6k"/><path class="ryvtvacvh"/><path class="v6ucn6h9j"/></g><path class="fc8-g1bvj"/><path class="hy12j1abm"/><path class="r1fxoub4g"/></g>`,
		"fallback": "pepicons-print:code",
	});
}

export default Component;
