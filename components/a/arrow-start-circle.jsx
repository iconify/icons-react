import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjpejac3h.css';
import '../../css/o/o2_tlwcqi.css';
import '../../css/f/f0knz3bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjpejac3h"/><path class="o2_tlwcqi"/><path class="f0knz3bso"/></g>`,
		"fallback": "andrsrxn:arrow-start-circle",
	});
}

export default Component;
