import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8j2vbxj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8j2vbxj"/>`,
		"fallback": "devicon-plain:goland-wordmark",
	});
}

export default Component;
