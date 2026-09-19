import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0f48tvgw.css';
import '../../css/w/wr3xfzlzs.css';
import '../../css/k/kcv0x8e3t.css';
import '../../css/x/x0d9ukbrv.css';
import '../../css/z/z8-56bccz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i0f48tvgw"/><path clip-rule="evenodd" class="wr3xfzlzs"/><path clip-rule="evenodd" class="kcv0x8e3t"/><path class="x0d9ukbrv"/><path clip-rule="evenodd" class="z8-56bccz"/></g>`,
		"fallback": "fluent-emoji-flat:control-knobs",
	});
}

export default Component;
