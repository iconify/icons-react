import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wai46z6_f.css';
import '../../css/g/gr1lzhqrl.css';
import '../../css/s/s04bt2b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wai46z6_f"/><path class="gr1lzhqrl"/><path class="s04bt2b7y"/></g>`,
		"fallback": "andrsrxn:cloud-upload",
	});
}

export default Component;
