import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6a6m7bhx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6a6m7bhx"/>`,
		"fallback": "devicon-plain:circleci-wordmark",
	});
}

export default Component;
