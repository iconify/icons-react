import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yys58ugwk.css';
import '../../css/a/an29vybme.css';
import '../../css/j/jz87xgbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yys58ugwk"/><path class="an29vybme"/><path clip-rule="evenodd" class="jz87xgbku"/></g>`,
		"fallback": "lucide-extended:houses-duotone",
	});
}

export default Component;
