import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/irp8ccchz.css';
import '../../css/i/iawjh31xa.css';
import '../../css/k/kd-0aibfs.css';
import '../../css/v/vtiaafd8f.css';
import '../../css/k/kftdv7k3g.css';
import '../../css/q/qgt064bwt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="irp8ccchz"/><path class="iawjh31xa"/><path class="kd-0aibfs"/></g><path class="vtiaafd8f"/><path class="kftdv7k3g"/><path class="qgt064bwt"/></g>`,
		"fallback": "pepicons-print:arrow-right",
	});
}

export default Component;
