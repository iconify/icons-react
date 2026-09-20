import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pmt5d56mi.css';
import '../../css/h/hs5-acbpc.css';
import '../../css/y/y64_-73hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pmt5d56mi"/><path class="hs5-acbpc"/><path class="y64_-73hw"/></g>`,
		"fallback": "streamline-freehand-color:camera-mode-photo",
	});
}

export default Component;
