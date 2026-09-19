import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig88j0zen.css';
import '../../css/d/d6l1v3bwk.css';
import '../../css/o/o5u_ysb-d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig88j0zen"/><path class="d6l1v3bwk"/><path class="o5u_ysb-d"/>`,
		"fallback": "devicon:elasticsearch",
	});
}

export default Component;
