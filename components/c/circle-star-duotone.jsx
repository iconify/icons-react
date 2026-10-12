import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/w/wzek1dblo.css';
import '../../css/m/mc35ekn7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="wzek1dblo"/><path class="mc35ekn7l"/></g>`,
		"fallback": "lucide-extended:circle-star-duotone",
	});
}

export default Component;
