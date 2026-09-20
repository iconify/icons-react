import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zxzn_ibmd.css';
import '../../css/i/ir0enebei.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r58w16b3i.css';
import '../../css/m/myx886b7x.css';
import '../../css/q/qc0jh2dad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGlW2iucCl" width="16" height="16" x="3" y="5" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="zxzn_ibmd"/><path class="ir0enebei"/></mask><g class="ft5dv1b6b"><path class="r58w16b3i"/><path mask="url(#SVGlW2iucCl)" class="myx886b7x"/><path class="qc0jh2dad"/></g>`,
		"fallback": "lets-icons:edit-duotone-line",
	});
}

export default Component;
