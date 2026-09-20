import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3j6brbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b3j6brbtp"/>`,
		"fallback": "stash:corner-up-right-duotone",
	});
}

export default Component;
