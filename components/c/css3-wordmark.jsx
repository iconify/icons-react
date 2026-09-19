import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bee63kb0z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bee63kb0z"/>`,
		"fallback": "devicon-plain:css3-wordmark",
	});
}

export default Component;
