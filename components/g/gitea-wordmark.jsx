import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz-b3xwif.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz-b3xwif"/>`,
		"fallback": "devicon-plain:gitea-wordmark",
	});
}

export default Component;
