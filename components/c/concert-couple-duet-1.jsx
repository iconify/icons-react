import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ryijhlbyz.css';
import '../../css/h/h5if93byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ryijhlbyz"/><path class="h5if93byk"/></g>`,
		"fallback": "streamline-freehand-color:concert-couple-duet-1",
	});
}

export default Component;
