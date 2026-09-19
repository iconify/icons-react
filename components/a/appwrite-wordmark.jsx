import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzlt8abim.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzlt8abim"/>`,
		"fallback": "devicon-plain:appwrite-wordmark",
	});
}

export default Component;
