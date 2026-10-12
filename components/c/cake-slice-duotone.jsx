import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz_aubc6p.css';
import '../../css/v/vra2vcckp.css';
import '../../css/p/pc1i8hn5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz_aubc6p"/><path class="vra2vcckp"/><path class="pc1i8hn5i"/></g>`,
		"fallback": "lucide-extended:cake-slice-duotone",
	});
}

export default Component;
