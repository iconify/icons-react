import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g97m8-h2j.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g97m8-h2j"/>`,
		"fallback": "jam:chevrons-square-up-left-f",
	});
}

export default Component;
