import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdf4ztcgy.css';
import '../../css/s/s0tt-qp-f.css';
import '../../css/a/a44wmpb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdf4ztcgy"/><path class="s0tt-qp-f"/><path class="a44wmpb2v"/></g>`,
		"fallback": "lucide-extended:footprints-duotone",
	});
}

export default Component;
