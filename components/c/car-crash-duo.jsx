import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os8h-iwky.css';
import '../../css/l/l5-yow2gy.css';
import '../../css/k/kjbh0ussn.css';
import '../../css/e/emhyxh43w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os8h-iwky"/><path class="l5-yow2gy"/><path class="kjbh0ussn"/><path class="emhyxh43w"/></g>`,
		"fallback": "glyphs:car-crash-duo",
	});
}

export default Component;
