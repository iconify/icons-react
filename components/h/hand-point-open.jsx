import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t79nqfb1n.css';
import '../../css/o/o9pfyqqty.css';
import '../../css/b/bulvyxg5m.css';
import '../../css/w/wf5_z4p1g.css';
import '../../css/e/eqev2dbms.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t79nqfb1n"/><path class="o9pfyqqty"/><path class="bulvyxg5m"/><path class="wf5_z4p1g"/><path class="eqev2dbms"/></g>`,
		"fallback": "pepicons-pencil:hand-point-open",
	});
}

export default Component;
