import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zgtva9bjo.css';
import '../../css/t/tjws3fbly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zgtva9bjo"/><path class="tjws3fbly"/></g>`,
		"fallback": "icon-park-outline:file-code-one",
	});
}

export default Component;
