import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqh3v7bpt.css';
import '../../css/d/d9g1r_bja.css';
import '../../css/g/gtu5-_bfv.css';
import '../../css/f/fk4r96bud.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pqh3v7bpt"/><path class="d9g1r_bja"/><path class="gtu5-_bfv"/><path class="fk4r96bud"/></g>`,
		"fallback": "streamline-flex-color:esports",
	});
}

export default Component;
