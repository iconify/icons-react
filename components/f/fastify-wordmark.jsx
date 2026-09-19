import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ot34bbd.css';
import '../../css/q/qbu68misp.css';
import '../../css/d/dq9knjb2v.css';
import '../../css/g/gchs6_bvw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ot34bbd"/><path class="qbu68misp"/><path class="dq9knjb2v"/><path class="gchs6_bvw"/>`,
		"fallback": "devicon:fastify-wordmark",
	});
}

export default Component;
