import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7ml_zbvx.css';
import '../../css/g/gu4o6xvsl.css';
import '../../css/e/eiee3q-fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s7ml_zbvx"/><path class="gu4o6xvsl"/><path class="eiee3q-fs"/></g>`,
		"fallback": "streamline-freehand-color:cables-usb-1",
	});
}

export default Component;
