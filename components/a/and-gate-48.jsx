import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqsl-cq4l.css';
import '../../css/r/rzc5_66zc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqsl-cq4l"/><path class="rzc5_66zc"/>`,
		"fallback": "energy-icons:and-gate-48",
	});
}

export default Component;
