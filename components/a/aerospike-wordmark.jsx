import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs1p27bvh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs1p27bvh"/>`,
		"fallback": "devicon:aerospike-wordmark",
	});
}

export default Component;
