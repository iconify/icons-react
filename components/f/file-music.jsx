import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq9rz809x.css';
import '../../css/d/dfwty8a8u.css';
import '../../css/u/ucklnp5sf.css';
import '../../css/i/iw1es0sil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oq9rz809x"/><path class="dfwty8a8u"/><path class="ucklnp5sf"/><path class="iw1es0sil"/></g>`,
		"fallback": "andrsrxn:file-music",
	});
}

export default Component;
