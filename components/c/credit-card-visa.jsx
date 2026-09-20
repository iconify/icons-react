import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xouclibnd.css';
import '../../css/a/as9pofblp.css';
import '../../css/a/ab4c95btg.css';
import '../../css/l/lx5km0kem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xouclibnd"/><path class="as9pofblp"/><path class="ab4c95btg"/><path class="lx5km0kem"/></g>`,
		"fallback": "streamline-ultimate-color:credit-card-visa",
	});
}

export default Component;
