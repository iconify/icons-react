import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9w77bbrk.css';
import '../../css/z/zbefq9b9n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9w77bbrk"/><path class="zbefq9b9n"/>`,
		"fallback": "devicon:apachespark-wordmark",
	});
}

export default Component;
