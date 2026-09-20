import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0cvjwbep.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0cvjwbep"/>`,
		"fallback": "octicon:file-pdf",
	});
}

export default Component;
