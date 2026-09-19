import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9je29i3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9je29i3z"/>`,
		"fallback": "icon-park-outline:code-one",
	});
}

export default Component;
