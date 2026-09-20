import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ax-2i6b0o.css';
import '../../css/x/xg2p0ccri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ax-2i6b0o"/><path class="xg2p0ccri"/></g>`,
		"fallback": "streamline-freehand-color:currency-international-currency",
	});
}

export default Component;
