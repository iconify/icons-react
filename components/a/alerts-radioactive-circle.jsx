import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kh_n3mb3b.css';
import '../../css/z/z-rzabo8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kh_n3mb3b"/><path class="z-rzabo8f"/></g>`,
		"fallback": "streamline-freehand-color:alerts-radioactive-circle",
	});
}

export default Component;
