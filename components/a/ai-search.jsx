import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e4mhcd03p.css';
import '../../css/j/jc2gwibxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="e4mhcd03p"/><path class="jc2gwibxh"/></g>`,
		"fallback": "tdesign:ai-search",
	});
}

export default Component;
