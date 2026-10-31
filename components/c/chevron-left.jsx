import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v3jl2yy4y.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v3jl2yy4y"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chevron-left",
	});
}

export default Component;
