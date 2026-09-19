import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot3lesm0z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot3lesm0z"/>`,
		"fallback": "devicon-plain:doctrine-wordmark",
	});
}

export default Component;
