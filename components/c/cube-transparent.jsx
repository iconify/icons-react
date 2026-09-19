import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6e93bg2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6e93bg2p"/>`,
		"fallback": "heroicons-solid:cube-transparent",
	});
}

export default Component;
