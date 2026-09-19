import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snctljmxk.css';
import '../../css/a/aplsh-biv.css';
import '../../css/s/s0qhzhbtq.css';
import '../../css/h/htcj1gbjn.css';
import '../../css/f/f1u_9myna.css';
import '../../css/d/d6y_3jbzj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 snctljmxk"/><path class="aplsh-biv clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 s0qhzhbtq"/><path class="clr-i-outline clr-i-outline-path-4 htcj1gbjn"/><path class="clr-i-outline clr-i-outline-path-5 f1u_9myna"/><path class="clr-i-outline clr-i-outline-path-1 d6y_3jbzj"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:dna-line",
	});
}

export default Component;
