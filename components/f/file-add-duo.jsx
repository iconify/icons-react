import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl1xbraru.css';
import '../../css/n/n5yhx2bkg.css';
import '../../css/q/qwd394bsp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zl1xbraru"/><path class="n5yhx2bkg"/><path class="qwd394bsp"/></g>`,
		"fallback": "glyphs:file-add-duo",
	});
}

export default Component;
