import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z58p1d3ec.css';
import '../../css/t/tscluyl0b.css';
import '../../css/u/uwqzc_bsf.css';
import '../../css/v/vis7tzbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z58p1d3ec"/><path class="tscluyl0b"/><path class="uwqzc_bsf"/><path class="vis7tzbty"/></g>`,
		"fallback": "streamline-freehand-color:database-network-1",
	});
}

export default Component;
