import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ipsrak4ly.css';
import '../../css/w/wf70n6j3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ipsrak4ly"/><path class="wf70n6j3m"/></g>`,
		"fallback": "streamline-freehand-color:disability-sit-pregnancy",
	});
}

export default Component;
