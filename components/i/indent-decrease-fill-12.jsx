import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xadmxrn2z.css';
import '../../css/d/dssw0v5yn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xadmxrn2z"/><path class="dssw0v5yn"/>`,
		"fallback": "garden:indent-decrease-fill-12",
	});
}

export default Component;
