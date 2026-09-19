import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cri63ezyx.css';
import '../../css/a/a_j1onboo.css';
import '../../css/f/fljkyj7pz.css';
import '../../css/d/dlkmes4xc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cri63ezyx"/><path class="a_j1onboo"/><path class="fljkyj7pz"/><path class="dlkmes4xc"/>`,
		"fallback": "fxemoji:bathtub",
	});
}

export default Component;
