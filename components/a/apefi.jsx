import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkl0h0b7k.css';
import '../../css/c/c29sjqb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkl0h0b7k"/><path class="c29sjqb7i"/>`,
		"fallback": "token:apefi",
	});
}

export default Component;
