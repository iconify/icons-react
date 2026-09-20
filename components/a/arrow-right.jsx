import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
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
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vtiaafd8f"/><path class="kftdv7k3g"/><path class="qgt064bwt"/></g>`,
		"fallback": "pepicons-pencil:arrow-right",
	});
}

export default Component;
