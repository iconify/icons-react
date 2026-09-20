import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwhco13bl.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwhco13bl"/>`,
		"fallback": "octicon:file",
	});
}

export default Component;
