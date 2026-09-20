import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7h00g2fi.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7h00g2fi"/>`,
		"fallback": "octicon:file-media",
	});
}

export default Component;
