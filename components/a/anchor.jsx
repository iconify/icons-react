import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d--s4ac9g.css';
import '../../css/y/ykzv_s3ci.css';
import '../../css/o/o9kppwbrt.css';
import '../../css/i/ipdeg6wsl.css';
import '../../css/e/ewexo-bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="d--s4ac9g"/><path class="ykzv_s3ci"/><circle class="o9kppwbrt"/><path class="ipdeg6wsl"/><path class="ewexo-bfn"/></g>`,
		"fallback": "andrsrxn:anchor",
	});
}

export default Component;
