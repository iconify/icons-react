import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5ci-16ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5ci-16ym"/>`,
		"fallback": "thesvg:ecosia",
	});
}

export default Component;
