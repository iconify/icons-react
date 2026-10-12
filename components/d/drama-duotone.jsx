import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vap258bfz.css';
import '../../css/c/c4s5r4b5t.css';
import '../../css/h/h0ar0vj5i.css';
import '../../css/s/sm__5obtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vap258bfz"/><path class="c4s5r4b5t"/><path class="h0ar0vj5i"/><path class="sm__5obtm"/></g>`,
		"fallback": "lucide-extended:drama-duotone",
	});
}

export default Component;
