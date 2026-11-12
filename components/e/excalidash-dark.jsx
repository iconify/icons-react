import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxnmy9bde.css';
import '../../css/m/mjttu00lo.css';
import '../../css/g/gmago3blo.css';
import '../../css/x/x-mqmdlpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxnmy9bde"/><path class="mjttu00lo"/><path class="gmago3blo"/><path class="x-mqmdlpz"/>`,
		"fallback": "selfhst:excalidash-dark",
	});
}

export default Component;
