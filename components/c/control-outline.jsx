import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u96yjjgeo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u96yjjgeo"/>`,
		"fallback": "lsicon:control-outline",
	});
}

export default Component;
