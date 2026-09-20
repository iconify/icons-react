import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mk35_kbij.css';
import '../../css/o/o_uca4bwo.css';
import '../../css/p/psft0wb0o.css';
import '../../css/z/zwqelfbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mk35_kbij"/><path class="o_uca4bwo"/><path class="psft0wb0o"/><path class="zwqelfbxm"/></g>`,
		"fallback": "streamline-freehand-color:allowances-no-food-sign",
	});
}

export default Component;
