import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klwxksbur.css';
import '../../css/p/pa_rqzygz.css';
import '../../css/a/au0y91bpr.css';
import '../../css/n/nsu45-bwk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klwxksbur"/><path class="pa_rqzygz"/><path class="au0y91bpr"/><path transform="matrix(1.47345 0 0 1.55542 -73.182 -243.814)" class="nsu45-bwk"/>`,
		"fallback": "devicon:bevyengine-wordmark",
	});
}

export default Component;
