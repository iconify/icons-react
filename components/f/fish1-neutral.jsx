import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alazuk46f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alazuk46f"/>`,
		"fallback": "codicon:fish1-neutral",
	});
}

export default Component;
