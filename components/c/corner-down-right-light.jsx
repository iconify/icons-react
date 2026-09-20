import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4sfbb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="af4sfbb6i"/>`,
		"fallback": "stash:corner-down-right-light",
	});
}

export default Component;
