import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpmku4bfs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpmku4bfs"/>`,
		"fallback": "heroicons-solid:envelope-open",
	});
}

export default Component;
