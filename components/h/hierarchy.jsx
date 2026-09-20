import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g51az2k9u.css';
import '../../css/y/y5kp75b4f.css';
import '../../css/z/zocdt8btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g51az2k9u"/><path class="y5kp75b4f"/><path class="zocdt8btw"/></g>`,
		"fallback": "streamline-freehand-color:hierarchy",
	});
}

export default Component;
