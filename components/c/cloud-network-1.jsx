import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/we9bzfb3x.css';
import '../../css/v/vyo2c1b7n.css';
import '../../css/o/owdh_1sjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="we9bzfb3x"/><path class="vyo2c1b7n"/><path class="owdh_1sjj"/></g>`,
		"fallback": "streamline-freehand-color:cloud-network-1",
	});
}

export default Component;
