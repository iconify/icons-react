import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu_un6b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu_un6b5x"/>`,
		"fallback": "withicons:git-commit-gloss",
	});
}

export default Component;
