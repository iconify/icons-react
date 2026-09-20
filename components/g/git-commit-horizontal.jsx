import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhh4z_b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhh4z_b-r"/>`,
		"fallback": "vadivam:git-commit-horizontal",
	});
}

export default Component;
