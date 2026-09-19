import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztoxc1bad.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztoxc1bad"/>`,
		"fallback": "codicon:agent-compact",
	});
}

export default Component;
