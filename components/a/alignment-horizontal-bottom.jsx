import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/o/ogva77b5b.css';
import '../../css/q/qaykzuatb.css';
import '../../css/n/nsc949boq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="ogva77b5b"/><path class="qaykzuatb"/><path class="nsc949boq"/></g>`,
		"fallback": "icon-park:alignment-horizontal-bottom",
	});
}

export default Component;
