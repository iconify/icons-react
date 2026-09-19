import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj1hczbnp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj1hczbnp"/>`,
		"fallback": "devicon-plain:clion-wordmark",
	});
}

export default Component;
