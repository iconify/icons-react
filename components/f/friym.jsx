import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxwquuvnh.css';
import '../../css/f/feg6l4hlv.css';
import '../../css/b/b8n84vbbt.css';
import '../../css/e/ed4ma6xcl.css';
import '../../css/t/tjjn32bcl.css';

const viewBox = {"width":285.21,"height":283.07};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxwquuvnh"/><circle class="feg6l4hlv"/><path class="b8n84vbbt"/><circle class="ed4ma6xcl"/><path class="tjjn32bcl"/>`,
		"fallback": "thesvg-color:friym",
	});
}

export default Component;
