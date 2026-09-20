import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihmrgyadd.css';
import '../../css/z/zaeq1obyq.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihmrgyadd"/><path class="zaeq1obyq"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-duotone",
	});
}

export default Component;
