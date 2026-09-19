import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ho0tljp.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ho0tljp"/>`,
		"fallback": "whh:cactus",
	});
}

export default Component;
