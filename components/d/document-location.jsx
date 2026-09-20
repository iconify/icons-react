import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rptjgybth.css';
import '../../css/i/it5wwus0x.css';
import '../../css/s/shxeislua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rptjgybth"/><path class="it5wwus0x"/><path class="shxeislua"/></g>`,
		"fallback": "tdesign:document-location",
	});
}

export default Component;
