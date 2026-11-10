import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh8uttzef.css';
import '../../css/p/p5426ac0f.css';
import '../../css/s/spddtk-sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yh8uttzef"/><path class="p5426ac0f"/><path class="spddtk-sq"/></g>`,
		"fallback": "andrsrxn:alt",
	});
}

export default Component;
