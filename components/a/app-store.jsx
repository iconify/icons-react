import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6vyf9bfs.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6vyf9bfs"/>`,
		"fallback": "ps:app-store",
	});
}

export default Component;
