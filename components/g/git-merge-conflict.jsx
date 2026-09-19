import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csnu-zy4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csnu-zy4y"/>`,
		"fallback": "hugeicons:git-merge-conflict",
	});
}

export default Component;
