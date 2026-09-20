import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to4gwhjvi.css';
import '../../css/z/zcsfiacrb.css';
import '../../css/o/otto5l3wd.css';
import '../../css/c/cb7u8-bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to4gwhjvi"/><path class="zcsfiacrb"/><path clip-rule="evenodd" class="otto5l3wd"/><path class="cb7u8-bvu"/></g>`,
		"fallback": "reicon:file-pdf-filled",
	});
}

export default Component;
