import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukqoe-34x.css';
import '../../css/z/ze0o43b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ukqoe-34x"/><path class="ze0o43b-w"/></g>`,
		"fallback": "tdesign:automatic-numbering",
	});
}

export default Component;
