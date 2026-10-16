import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw4clab2s.css';
import '../../css/z/zdb6vcbxv.css';
import '../../css/g/gzjs6uf3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw4clab2s"/><path class="zdb6vcbxv"/><path class="gzjs6uf3r"/></g>`,
		"fallback": "andrsrxn:earbuds-check",
	});
}

export default Component;
