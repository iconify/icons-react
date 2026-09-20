import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nnsn99bzd.css';
import '../../css/j/jgw326pqz.css';
import '../../css/r/reg1o1oqx.css';
import '../../css/z/zyjmlubli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nnsn99bzd"/><path class="jgw326pqz"/><path class="reg1o1oqx"/><path class="zyjmlubli"/></g>`,
		"fallback": "streamline-freehand-color:drawer-envelope",
	});
}

export default Component;
