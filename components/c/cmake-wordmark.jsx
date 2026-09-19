import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doblu-bmr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doblu-bmr"/>`,
		"fallback": "devicon-plain:cmake-wordmark",
	});
}

export default Component;
