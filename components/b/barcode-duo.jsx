import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a06u0tofd.css';
import '../../css/s/se96vnkdh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a06u0tofd"/><path class="se96vnkdh"/></g>`,
		"fallback": "glyphs:barcode-duo",
	});
}

export default Component;
