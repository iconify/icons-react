import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rdenubbrx.css';
import '../../css/b/bom312b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="rdenubbrx"/><path class="bom312b6z"/></g>`,
		"fallback": "tdesign:ai-layout",
	});
}

export default Component;
