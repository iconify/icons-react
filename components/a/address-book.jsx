import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkmmjsq7w.css';
import '../../css/v/vsl3hzbif.css';
import '../../css/d/dt2ucwblp.css';
import '../../css/u/u9chh6_lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkmmjsq7w"/><path class="vsl3hzbif"/><path class="dt2ucwblp"/><path class="u9chh6_lz"/></g>`,
		"fallback": "tdesign:address-book",
	});
}

export default Component;
