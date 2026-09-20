import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r1k6ffbcm.css';
import '../../css/m/m9rcm8bne.css';
import '../../css/g/gzpo1u_la.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r1k6ffbcm"/><path class="m9rcm8bne"/><path class="gzpo1u_la"/></g>`,
		"fallback": "streamline-color:ai-network-spark-flat",
	});
}

export default Component;
