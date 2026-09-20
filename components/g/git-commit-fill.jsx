import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjxba3boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjxba3boa"/>`,
		"fallback": "mingcute:git-commit-fill",
	});
}

export default Component;
