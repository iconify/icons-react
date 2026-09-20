import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxr-fcc-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxr-fcc-v"/>`,
		"fallback": "nrk:bar-graph-expressive",
	});
}

export default Component;
