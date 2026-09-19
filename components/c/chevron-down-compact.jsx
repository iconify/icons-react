import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjlsuub8p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjlsuub8p"/>`,
		"fallback": "codicon:chevron-down-compact",
	});
}

export default Component;
