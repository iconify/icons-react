import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw3ztwb7z.css';
import '../../css/w/wnni9vb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw3ztwb7z"/><path class="wnni9vb7t"/>`,
		"fallback": "token:id",
	});
}

export default Component;
