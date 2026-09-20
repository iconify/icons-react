import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnzq4cudj.css';
import '../../css/e/e1zpqvs-y.css';
import '../../css/f/fa-ek3b5p.css';
import '../../css/g/guuxl5byj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnzq4cudj"/><path class="e1zpqvs-y"/><path class="fa-ek3b5p"/><path class="guuxl5byj"/></g>`,
		"fallback": "streamline-flex-color:color-picker",
	});
}

export default Component;
