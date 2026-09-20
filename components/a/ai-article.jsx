import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e9q4xebbb.css';
import '../../css/b/bom312b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="e9q4xebbb"/><path class="bom312b6z"/></g>`,
		"fallback": "tdesign:ai-article",
	});
}

export default Component;
