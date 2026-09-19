import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfe8m9-nj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfe8m9-nj"/>`,
		"fallback": "devicon-plain:git-wordmark",
	});
}

export default Component;
