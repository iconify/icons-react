import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eby38zzef.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eby38zzef"/>`,
		"fallback": "memory:cube-unfolded",
	});
}

export default Component;
