import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2r1u945l.css';
import '../../css/u/ui8hhj57u.css';
import '../../css/v/vj1p6ltxl.css';
import '../../css/r/r74_ckbxv.css';
import '../../css/n/nudbr1b6r.css';
import '../../css/x/xp9uod8da.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2r1u945l"/><path class="ui8hhj57u"/><path class="vj1p6ltxl"/><circle class="r74_ckbxv"/><circle class="nudbr1b6r"/><path class="xp9uod8da"/></g>`,
		"fallback": "cif:az",
	});
}

export default Component;
