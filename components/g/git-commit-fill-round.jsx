import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnay0bb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnay0bb6i"/>`,
		"fallback": "coolicons:git-commit-fill-round",
	});
}

export default Component;
