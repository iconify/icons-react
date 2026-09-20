import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knlfp1bfs.css';
import '../../css/n/ngqnexboc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knlfp1bfs"/><path class="ngqnexboc"/>`,
		"fallback": "streamline-pixel:building-real-eastate-sign-house-1",
	});
}

export default Component;
