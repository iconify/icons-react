import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czz4bal.css';
import '../../css/m/m1-j5hxxc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czz4bal"/><path class="m1-j5hxxc"/>`,
		"fallback": "energy-icons:house-heart-48",
	});
}

export default Component;
