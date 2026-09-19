import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6l_j5b2f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6l_j5b2f"/>`,
		"fallback": "devicon-plain:ecto-wordmark",
	});
}

export default Component;
