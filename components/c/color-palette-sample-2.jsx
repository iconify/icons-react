import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvevkhbsd.css';
import '../../css/f/fnx5s2bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvevkhbsd"/><path class="fnx5s2bwf"/>`,
		"fallback": "streamline-freehand:color-palette-sample-2",
	});
}

export default Component;
