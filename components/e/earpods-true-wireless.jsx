import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/erjvk0bmc.css';
import '../../css/k/k2e__fuki.css';
import '../../css/i/i9fx_71ve.css';
import '../../css/d/dorrxzhyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="erjvk0bmc"/><path class="k2e__fuki"/><path class="i9fx_71ve"/><path class="dorrxzhyq"/></g>`,
		"fallback": "streamline-freehand-color:earpods-true-wireless",
	});
}

export default Component;
