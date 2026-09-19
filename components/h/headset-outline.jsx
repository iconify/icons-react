import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/defuaabko.css';
import '../../css/n/n43_i1bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="defuaabko"/><path clip-rule="evenodd" class="n43_i1bug"/>`,
		"fallback": "cuida:headset-outline",
	});
}

export default Component;
