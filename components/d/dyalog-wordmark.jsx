import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8ildbvh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8ildbvh"/>`,
		"fallback": "devicon:dyalog-wordmark",
	});
}

export default Component;
