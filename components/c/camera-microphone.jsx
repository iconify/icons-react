import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thncbjb5a.css';
import '../../css/l/lgi836qzt.css';
import '../../css/i/irsptrbee.css';
import '../../css/x/xjmvuhb0b.css';
import '../../css/v/vrsx8ccsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thncbjb5a"/><path class="lgi836qzt"/><path class="irsptrbee"/><path class="xjmvuhb0b"/><path class="vrsx8ccsv"/></g>`,
		"fallback": "andrsrxn:camera-microphone",
	});
}

export default Component;
