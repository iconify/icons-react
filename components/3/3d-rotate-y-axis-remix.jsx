import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c96sl1brq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c96sl1brq"/>`,
		"fallback": "streamline-flex:3d-rotate-y-axis-remix",
	});
}

export default Component;
