import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le202y2fx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le202y2fx"/>`,
		"fallback": "pinhead:conifer-tree-with-antenna-array",
	});
}

export default Component;
