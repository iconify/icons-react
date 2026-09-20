import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi4e96bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi4e96bsb"/>`,
		"fallback": "ri:git-repository-commits-line",
	});
}

export default Component;
