import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/opo1zcc8y.css';
import '../../css/o/o8cb350vf.css';
import '../../css/e/em4i2mbry.css';
import '../../css/a/am077nbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="opo1zcc8y"/><path class="o8cb350vf"/><path class="em4i2mbry"/><path class="am077nbxd"/></g>`,
		"fallback": "streamline-freehand-color:app-window-link",
	});
}

export default Component;
