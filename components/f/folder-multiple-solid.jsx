import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7rms6bun.css';
import '../../css/p/pnnc77hwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7rms6bun"/><path class="pnnc77hwy"/>`,
		"fallback": "stash:folder-multiple-solid",
	});
}

export default Component;
