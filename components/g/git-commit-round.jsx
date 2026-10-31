import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knui3cfem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knui3cfem"/>`,
		"fallback": "coolicons:git-commit-round",
	});
}

export default Component;
