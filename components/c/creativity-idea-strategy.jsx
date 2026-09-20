import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tvjpfuqws.css';
import '../../css/v/vgw_f6qab.css';
import '../../css/b/br1x7ltog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tvjpfuqws"/><path class="vgw_f6qab"/><path class="br1x7ltog"/></g>`,
		"fallback": "streamline-freehand-color:creativity-idea-strategy",
	});
}

export default Component;
