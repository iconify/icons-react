import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/aokjzfb5m.css';
import '../../css/f/figx77b4h.css';
import '../../css/m/m68jc6zdp.css';
import '../../css/i/i6fgvymmi.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="aokjzfb5m"/><path class="figx77b4h"/></g><path class="m68jc6zdp"/><path class="i6fgvymmi"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:euro-circle",
	});
}

export default Component;
