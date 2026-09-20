import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrvltfb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrvltfb4w"/>`,
		"fallback": "thesvg:albert-heijn",
	});
}

export default Component;
