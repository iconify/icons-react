import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sioybtrvt.css';
import '../../css/d/d4779fbwf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sioybtrvt"/><path class="d4779fbwf"/></g>`,
		"fallback": "streamline-color:camera-video-flat",
	});
}

export default Component;
