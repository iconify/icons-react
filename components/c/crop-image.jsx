import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r7eh21bwh.css';
import '../../css/w/wrpl5eb5t.css';
import '../../css/q/qmvky9b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r7eh21bwh"/><path class="wrpl5eb5t"/><path class="qmvky9b5j"/></g>`,
		"fallback": "streamline-freehand-color:crop-image",
	});
}

export default Component;
