import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co0vf9bvy.css';
import '../../css/y/y91t96b3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co0vf9bvy"/><path class="y91t96b3j"/>`,
		"fallback": "energy-icons:aspect-ratio-20",
	});
}

export default Component;
