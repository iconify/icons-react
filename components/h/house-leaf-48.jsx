import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czz4bal.css';
import '../../css/c/ccr9upwvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czz4bal"/><path class="ccr9upwvl"/>`,
		"fallback": "energy-icons:house-leaf-48",
	});
}

export default Component;
