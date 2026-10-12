import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rne8-kbom.css';
import '../../css/z/zhnptnbwx.css';
import '../../css/g/gp9p8lb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rne8-kbom"/><path class="zhnptnbwx"/><path class="gp9p8lb5v"/></g>`,
		"fallback": "lucide-extended:faucet-duotone",
	});
}

export default Component;
