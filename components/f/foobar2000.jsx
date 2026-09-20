import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujd44zd-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujd44zd-s"/>`,
		"fallback": "thesvg:foobar2000",
	});
}

export default Component;
