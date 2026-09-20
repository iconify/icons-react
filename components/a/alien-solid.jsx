import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8sspqbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8sspqbok"/>`,
		"fallback": "streamline-sharp:alien-solid",
	});
}

export default Component;
