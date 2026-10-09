import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1v0ij09t.css';
import '../../css/c/cv6p3wbsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1v0ij09t"/><path class="cv6p3wbsr"/>`,
		"fallback": "energy-icons:handshake-48",
	});
}

export default Component;
