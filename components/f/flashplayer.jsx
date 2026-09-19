import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-xii3aka.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-xii3aka"/>`,
		"fallback": "whh:flashplayer",
	});
}

export default Component;
