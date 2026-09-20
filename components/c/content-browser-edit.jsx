import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ariqabb3m.css';
import '../../css/p/p3xi1cbyh.css';
import '../../css/h/hcf_tsbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ariqabb3m"/><path class="p3xi1cbyh"/><path class="hcf_tsbst"/></g>`,
		"fallback": "streamline-freehand-color:content-browser-edit",
	});
}

export default Component;
