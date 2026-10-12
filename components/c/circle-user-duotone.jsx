import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/y/yrd184b0k.css';
import '../../css/p/p48scs1mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path class="yrd184b0k"/><path class="p48scs1mx"/></g>`,
		"fallback": "lucide-extended:circle-user-duotone",
	});
}

export default Component;
