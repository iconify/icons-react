import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t53qi8eao.css';
import '../../css/o/oynafr2ci.css';
import '../../css/i/i64w-obuv.css';
import '../../css/x/x5xq3cbwy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t53qi8eao"/><path class="oynafr2ci"/><path class="i64w-obuv"/><path class="x5xq3cbwy"/></g>`,
		"fallback": "glyphs:images-duo",
	});
}

export default Component;
