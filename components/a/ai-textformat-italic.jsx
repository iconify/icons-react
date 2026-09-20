import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/h71_nwbpx.css';
import '../../css/h/hhhbhy3mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="h71_nwbpx"/><path class="hhhbhy3mc"/></g>`,
		"fallback": "tdesign:ai-textformat-italic",
	});
}

export default Component;
