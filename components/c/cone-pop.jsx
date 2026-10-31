import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/octjy_bbl.css';
import '../../css/p/pu7pftb9c.css';
import '../../css/u/uoaq0bnfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="octjy_bbl"/><path class="pu7pftb9c"/><path class="uoaq0bnfg"/></g>`,
		"fallback": "streamline-kameleon-color:cone-pop",
	});
}

export default Component;
