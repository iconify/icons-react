import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9swzab_x.css';
import '../../css/o/obupphvdh.css';
import '../../css/g/gzwdznb2d.css';
import '../../css/y/y9hlo-yos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9swzab_x"/><path class="obupphvdh"/><path class="gzwdznb2d"/><path class="y9hlo-yos"/></g>`,
		"fallback": "andrsrxn:clipboard-list",
	});
}

export default Component;
