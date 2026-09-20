import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phtfdhtmq.css';
import '../../css/m/mmda7bbit.css';
import '../../css/m/mzft2nbcf.css';
import '../../css/d/du7j57bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phtfdhtmq"/><path class="mmda7bbit"/><path class="mzft2nbcf"/><path class="du7j57bym"/></g>`,
		"fallback": "streamline-cyber-color:book-phone-contact",
	});
}

export default Component;
