import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/n/n0r0a7bqi.css';
import '../../css/p/pog0si8pj.css';
import '../../css/m/mmhjxdbkm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG6207Obbb"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="n0r0a7bqi"/><path class="pog0si8pj"/><path class="mmhjxdbkm"/></g></mask></defs><circle mask="url(#SVG6207Obbb)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-left-circle-filled",
	});
}

export default Component;
